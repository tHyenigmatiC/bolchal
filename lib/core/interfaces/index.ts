/* eslint-disable @typescript-eslint/no-explicit-any */
export * from './auth'
export * from './data'
export * from './live'

export type BaseKey = string | number

export type BaseRecord = {
	id?: BaseKey
	[key: string]: unknown
}

export type MetaQuery = {
	[key: string]: any
}
