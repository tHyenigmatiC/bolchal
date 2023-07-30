import { BaseKey, BaseRecord, MetaQuery } from '@lib/core/interfaces'
import { CrudFilters, CrudSorting, Pagination } from '.'

export interface GetOneResponse<ResponseData = BaseRecord> {
	data: ResponseData
}

export interface GetManyResponse<ResponseData = BaseRecord> {
	data: ResponseData[]
}

export interface GetListResponse<ResponseData = BaseRecord> {
	data: ResponseData[]
	total: number
	[key: string]: unknown
}

export interface CreateOneResponse<ResponseData = BaseRecord> {
	data: ResponseData
}

export interface CreateManyResponse<ResponseData = BaseRecord> {
	data: ResponseData[]
}

export interface UpdateOneResponse<ResponseData = BaseRecord> {
	data: ResponseData
}

export interface UpdateManyResponse<ResponseData = BaseRecord> {
	data: ResponseData[]
}

export interface DeleteOneResponse<ResponseData = BaseRecord> {
	data: ResponseData
}

export interface DeleteManyResponse<ResponseData = BaseRecord> {
	data: ResponseData[]
}

export interface CustomResponse<ResponseData = BaseRecord> {
	data: ResponseData
}

export interface IDataContext {
	getOne: <TData extends BaseRecord = BaseRecord>(params: {
		resource: string
		id: BaseKey
		meta?: MetaQuery
	}) => Promise<GetOneResponse<TData>>
	getMany: <TData extends BaseRecord = BaseRecord>(params: {
		resource: string
		ids: BaseKey[]
		meta?: MetaQuery
	}) => Promise<GetManyResponse<TData>>
	getList: <TData extends BaseRecord = BaseRecord>(params: {
		resource: string
		pagination?: Pagination
		sort?: CrudSorting
		filters?: CrudFilters
		meta?: MetaQuery
	}) => Promise<GetListResponse<TData>>
	createOne: <
		TData extends BaseRecord = BaseRecord,
		TVariables = object,
	>(params: {
		resource: string
		variables?: TVariables
		meta?: MetaQuery
	}) => Promise<CreateOneResponse<TData>>
	createMany: <
		TData extends BaseRecord = BaseRecord,
		TVariables = object,
	>(params: {
		resource: string
		variables?: TVariables[]
		meta?: MetaQuery
	}) => Promise<CreateManyResponse<TData>>
	updateOne: <
		TData extends BaseRecord = BaseRecord,
		TVariables = object,
	>(params: {
		resource: string
		id: BaseKey
		variables?: TVariables
		meta?: MetaQuery
	}) => Promise<UpdateOneResponse<TData>>
	updateMany: <
		TData extends BaseRecord = BaseRecord,
		TVariables = object,
	>(params: {
		resource: string
		ids?: BaseKey[]
		variables?: TVariables[]
		meta?: MetaQuery
	}) => Promise<UpdateManyResponse<TData>>
	deleteOne: <
		TData extends BaseRecord = BaseRecord,
		TVariables = object,
	>(params: {
		resource: string
		id: BaseKey
		variables?: TVariables
		meta?: MetaQuery
	}) => Promise<DeleteOneResponse<TData>>
	deleteMany: <
		TData extends BaseRecord = BaseRecord,
		TVariables = object,
	>(params: {
		resource: string
		ids?: BaseKey[]
		variables?: TVariables[]
		meta?: MetaQuery
	}) => Promise<DeleteManyResponse<TData>>
}
