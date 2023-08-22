import { useLiveData } from './useLiveData'
import { BaseKey, SubscribeOptions } from '../../interfaces'

export type Payload =
	| {
			ids?: BaseKey[]
			[key: string]: unknown
	  }
	| undefined

export const useRealtime = ({ channel, types, callback }: SubscribeOptions) => {
	const { subscribe, unsubscribe } = useLiveData()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let subscription: any = undefined

	const listenToRealtimeUpdates = () => {
		subscription = subscribe({
			channel,
			types,
			callback,
		})
	}

	const stopRealTimeUpdates = () => {
		if (subscription) {
			unsubscribe(subscription)
		}
	}

	return {
		listenToRealtimeUpdates,
		stopRealTimeUpdates,
	}
}
