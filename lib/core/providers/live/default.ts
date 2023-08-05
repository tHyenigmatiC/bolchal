import { LiveEvent } from '@lib/core/interfaces'

export const defaultLiveProvider = () => {
	return {
		publish: (event: LiveEvent) => {
			console.log(event)
		},
		subscribe: (options: {
			channel: 'messages'
			params: {
				subscriptionType: 'useOne'
				resource: 'database'
				id: 1
			}
			types: ['created']
			callback: (event: LiveEvent) => object
		}) => {
			console.log(options)
		},
		unsubscribe: (subscription: string) => {
			console.log(subscription)
		},
	}
}
