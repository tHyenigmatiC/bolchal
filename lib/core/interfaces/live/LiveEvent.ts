import { BaseKey } from '@lib/core/interfaces'

export type LiveEvent = {
	channel: string
	type: 'deleted' | 'created' | 'updated' | '*' | string
	payload: {
		ids?: BaseKey[]
		[key: string]: unknown
	}
	date: Date
}
