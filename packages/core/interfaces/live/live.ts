/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseKey, CrudFilters, CrudSorting, MetaQuery, Pagination } from '..'
import { LiveEvent } from './LiveEvent'

export type LiveListParams = {
	resource?: string
	pagination?: Pagination
	sort?: CrudSorting
	filters?: CrudFilters
	meta?: MetaQuery
}

export type LiveOneParams = {
	resource?: string
	id?: BaseKey
}

export type LiveManyParams = {
	resource?: string
	ids?: BaseKey[]
}

export type LiveCommonParams = {
	subscriptionType?: 'useList' | 'useOne' | 'useMany'
	[key: string]: any
}

export type SubscribeOptions = {
	channel: string
	params?: LiveCommonParams &
		(LiveOneParams | LiveManyParams | LiveListParams)
	types: LiveEvent['type'][]
	callback: (event: LiveEvent) => void
}

export type ILiveContext = {
	publish?: (event: LiveEvent) => void
	subscribe: (options: SubscribeOptions) => any
	unsubscribe: (subscription: any) => void
}
