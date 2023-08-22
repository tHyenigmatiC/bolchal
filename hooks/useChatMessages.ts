import { Pagination } from '@packages/core'
import { useGetIdentity, useGetList, useRealtime } from '@packages/core/hooks'
import { useCreateOne } from '@packages/core/hooks/data/useCreateOne'
import { Models, Permission, Role } from 'appwrite'
import { useCallback, useEffect, useRef, useState } from 'react'

export type ChatMessage = Models.Document & {
	name: string
	message: string
}

export const useChatMessages = () => {
	const [pagination, setPagination] = useState<Pagination>({
		current: 1,
		mode: 'server',
		pageSize: 15,
	})

	const { loadData: handleLoadData } = useGetList()
	const [messages, setMessages] = useState<ChatMessage[]>([])
	const { user } = useGetIdentity()
	const { create } = useCreateOne()
	const cursor = useRef<string>()

	const { listenToRealtimeUpdates, stopRealTimeUpdates } = useRealtime({
		channel: process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID as string,
		types: ['created'],
		callback: ({ payload: newMessage }) => {
			setMessages((oldMessages) => [
				...oldMessages,
				newMessage as ChatMessage,
			])
		},
	})

	const updateMessages = () => {
		setPagination({
			cursor: cursor.current as string,
			direction: 'after',
			pageSize: 15,
			mode: 'server',
		})
	}

	const loadData = useCallback(() => {
		handleLoadData({
			resource: process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID as string,
			pagination,
			sort: [
				{
					field: '$createdAt',
					order: 'desc',
				},
			],
		}).then(
			(response) => {
				const chatMessages =
					(response?.data as unknown as ChatMessage[]) || []
				cursor.current = chatMessages?.[chatMessages.length - 1]?.id
				setMessages((oldMessages) => [
					...chatMessages.sort((a, b) => {
						return (
							new Date(a.$updatedAt).getTime() -
							new Date(b.$updatedAt).getTime()
						)
					}),
					...oldMessages,
				])
			},
			(error) => {
				console.log(error)
				setMessages([])
			}
		)
	}, [pagination])

	useEffect(() => {
		loadData()
	}, [loadData])

	useEffect(() => {
		listenToRealtimeUpdates()
		return () => {
			stopRealTimeUpdates()
		}
	}, [])

	const sendMessage = async ({ message }: { message: string }) => {
		await create({
			resource: process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID as string,
			variables: {
				message,
				sender: user?.name ?? 'Kapil',
				receiver: user?.name ?? 'Kapil',
			},
			meta: {
				readPermissions: [
					Permission.read(Role.user(user?.$id as string)),
				],
				writePermissions: [
					Permission.update(Role.user(user?.$id as string)),
					Permission.delete(Role.user(user?.$id as string)),
				],
			},
		})
	}

	return {
		messages,
		sendMessage,
		updateMessages,
	}
}
