import { BaseKey, BaseRecord, MetaQuery } from '@lib/core/interfaces'
import { CrudFilters, CrudSorting, Pagination } from '.'

export interface GetOneResponse<ResponseData> {
	data: ResponseData
}

export interface GetManyResponse<ResponseData> {
	data: ResponseData[]
}

export interface GetListResponse<ResponseData> {
	data: ResponseData[]
	total: number
	[key: string]: unknown
}

export interface CreateOneResponse<ResponseData> {
	data: ResponseData
}

export interface CreateManyResponse<ResponseData> {
	data: ResponseData[]
}

export interface UpdateOneResponse<ResponseData> {
	data: ResponseData
}

export interface UpdateManyResponse<ResponseData> {
	data: ResponseData[]
}

export interface DeleteOneResponse<ResponseData> {
	data: ResponseData
}

export interface DeleteManyResponse<ResponseData> {
	data: ResponseData[]
}

export interface CustomResponse<ResponseData> {
	data: ResponseData
}

export interface IDataContext {
	getOne: <TData extends BaseRecord>(params: {
		resource: string
		id: BaseKey
		meta?: MetaQuery
	}) => Promise<GetOneResponse<TData>>
	getMany: <TData extends BaseRecord>(params: {
		resource: string
		ids: BaseKey[]
		meta?: MetaQuery
	}) => Promise<GetManyResponse<TData>>
	getList: <TData extends BaseRecord>(params: {
		resource: string
		pagination?: Pagination
		sort?: CrudSorting
		filters?: CrudFilters
		meta?: MetaQuery
	}) => Promise<GetListResponse<TData>>
	createOne: <TData extends BaseRecord, TVariables = object>(params: {
		resource: string
		variables: TVariables
		meta?: MetaQuery
	}) => Promise<CreateOneResponse<TData>>
	createMany: <TData extends BaseRecord, TVariables = object>(params: {
		resource: string
		variables: TVariables[]
		meta?: MetaQuery
	}) => Promise<CreateManyResponse<TData>>
	updateOne: <TData extends BaseRecord, TVariables = object>(params: {
		resource: string
		id: BaseKey
		variables: TVariables
		meta?: MetaQuery
	}) => Promise<UpdateOneResponse<TData>>
	updateMany: <TData extends BaseRecord, TVariables = object>(params: {
		resource: string
		ids: BaseKey[]
		variables: TVariables
		meta?: MetaQuery
	}) => Promise<UpdateManyResponse<TData>>
	deleteOne: <TData extends BaseRecord, TVariables = object>(params: {
		resource: string
		id: BaseKey
		variables?: TVariables
		meta?: MetaQuery
	}) => Promise<DeleteOneResponse<TData>>
	deleteMany: <TData extends BaseRecord, TVariables = object>(params: {
		resource: string
		ids: BaseKey[]
		variables?: TVariables[]
		meta?: MetaQuery
	}) => Promise<DeleteManyResponse<TData>>
}
