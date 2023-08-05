'use client'

import { ILiveContext } from '@lib/core/interfaces/live'
import { Client as Appwrite } from 'appwrite'
import { getAppEvent } from './getAppEvent'

export const liveProvider = (
	appwriteClient: Appwrite,
	options: { databaseId: string } = { databaseId: 'chat' }
): ILiveContext => {
	const { databaseId } = options

	return {
		subscribe: ({ channel, types, params, callback }) => {
			const resource = channel.replace('resources/', '')

			let appwriteChannel

			if (params?.ids) {
				appwriteChannel = params.ids.map(
					(id: string) =>
						`databases.${databaseId}.collections.${resource}.document.${id}`
				)
			} else {
				appwriteChannel = `databases.${databaseId}.collections.${resource}.documents`
			}

			return appwriteClient.subscribe(appwriteChannel, (event) => {
				const appEvent = getAppEvent(event.events[0])
				if (
					types.includes('*') ||
					(appEvent && types.includes(appEvent))
				) {
					callback({
						channel,
						type: getAppEvent(event.events[0]) ?? event.events[0],
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						payload: event.payload as any,
						date: new Date(event.timestamp * 1000),
					})
				}
			})
		},
		unsubscribe: async (subscription: () => void) => {
			// closes the subscription
			subscription()
		},
	}
}
