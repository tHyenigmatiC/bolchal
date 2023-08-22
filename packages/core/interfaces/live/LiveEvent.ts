import { BaseKey } from '..'

export type LiveEvent = {
	channel: string
	type: 'deleted' | 'created' | 'updated' | '*' | string
	payload: {
		ids?: BaseKey[]
		[key: string]: unknown
	}
	date: Date
}
