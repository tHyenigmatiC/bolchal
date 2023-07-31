import {
	BaseKey,
	CrudFilters,
	CrudSorting,
	MetaQuery,
	Pagination,
} from '@lib/core/interfaces'
import { LiveEvent } from './LiveEvent'

export type ILiveContext =
	| {
			publish?: (event: LiveEvent) => void
			subscribe: (options: {
				channel: string
				params?: {
					ids?: BaseKey[]
					id?: BaseKey
					meta?: MetaQuery
					pagination?: Pagination
					sort?: CrudSorting
					filters?: CrudFilters
					subscriptionType?: 'useList' | 'useOne' | 'useMany'
					resource?: string
					[key: string]: unknown
				}
				types: LiveEvent['type'][]
				callback: (event: LiveEvent) => void
			}) => unknown
			unsubscribe: (subscription: unknown) => void
	  }
	| undefined
