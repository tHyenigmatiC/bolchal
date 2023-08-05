'use client'

import { LiveContext } from '@lib/core'
import { account, database } from '@services/appwriteClient'
import { Models } from 'appwrite'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { collectionID, databaseID } from './config'

export type ChatMessage = Models.Document & {
	name: string
	message: string
}

export const useChat = () => {
	const realtime = useContext(LiveContext)
	const [messages, setMessages] = useState<ChatMessage[]>([])
	const [user, setUser] = useState<Models.User<Models.Preferences>>()
	const router = useRouter()

	useEffect(() => {
		let mounted = true
		if (mounted) {
			account.get().then(
				(user) => {
					setUser(user)
				},
				() => {
					router.push('/sign-in')
				}
			)
		}

		return () => {
			mounted = false
		}
	}, [])

	useEffect(() => {
		let mounted = true
		if (mounted) {
			const loadMessages = () => {
				database
					.listDocuments(databaseID, collectionID)
					.then((data) => {
						setMessages(data.documents as ChatMessage[])
					})
			}
			loadMessages()
		}

		return () => {
			mounted = false
		}
	}, [])

	useEffect(() => {
		const subscription: () => void = realtime.subscribe({
			channel: 'messages',
			types: ['created'],
			callback: ({ payload }) => {
				setMessages((previousMessages) => [
					...previousMessages,
					payload as ChatMessage,
				])
			},
		})

		return () => {
			realtime.unsubscribe(subscription)
		}
	}, [])

	const sendMessage = async ({ message }: { message: string }) => {
		await database.createDocument(databaseID, collectionID, 'unique()', {
			user: user?.name,
			message,
		})
	}

	return {
		messages,
		sendMessage,
	}
}
