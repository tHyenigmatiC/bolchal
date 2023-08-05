import { useGetIdentity, useGetList, useRealtime } from '@lib/core/hooks'
import { useCreateOne } from '@lib/core/hooks/data/useCreateOne'
import { Models } from 'appwrite'
import { useEffect, useState } from 'react'

export type ChatMessage = Models.Document & {
	name: string
	message: string
}

export const useChatMessages = () => {
	const { loadData } = useGetList({
		resource: process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID as string,
	})
	const [messages, setMessages] = useState<ChatMessage[]>([])
	const { user } = useGetIdentity()
	const { create } = useCreateOne()

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

	useEffect(() => {
		loadData().then(
			(response) => {
				setMessages(response?.data as unknown as ChatMessage[])
			},
			() => {
				setMessages([])
			}
		)
	}, [])

	useEffect(() => {
		listenToRealtimeUpdates()
		return () => {
			stopRealTimeUpdates()
		}
	}, [])

	const sendMessage = async ({ message }: { message: string }) => {
		await create({
			resource: 'messages',
			variables: {
				message,
				user: user?.name ?? 'Kapil',
			},
		})
	}

	return {
		messages,
		sendMessage,
	}
}
