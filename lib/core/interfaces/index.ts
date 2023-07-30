export * from './auth'
export * from './data'

export type BaseKey = string | number

export type BaseRecord = {
	id?: BaseKey
	[key: string]: unknown
}

export type MetaQuery = {
	[key: string]: unknown
}
