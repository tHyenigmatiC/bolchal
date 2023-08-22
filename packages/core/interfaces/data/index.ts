import { BaseKey, BaseRecord, MetaQuery } from '..'
import { CrudFilters, CrudSorting, Pagination } from './operations'

export interface GetOneParams {
	resource: string
	id: BaseKey
	meta?: MetaQuery
}

export interface GetOneResponse<ResponseData> {
	data: ResponseData
}

export interface GetManyParams {
	resource: string
	ids: BaseKey[]
	meta?: MetaQuery
}

export interface GetManyResponse<ResponseData> {
	data: ResponseData[]
}

export interface GetListParams {
	resource: string
	pagination?: Pagination
	sort?: CrudSorting
	filters?: CrudFilters
	meta?: MetaQuery
}

export interface GetListResponse<ResponseData> {
	data: ResponseData[]
	total: number
	[key: string]: unknown
}

export interface CreateOneParams<TVariables = object> {
	resource: string
	variables: TVariables
	meta?: MetaQuery
}
export interface CreateOneResponse<ResponseData> {
	data: ResponseData
}

export interface CreateManyParams<TVariables = object> {
	resource: string
	variables: TVariables[]
	meta?: MetaQuery
}

export interface CreateManyResponse<ResponseData> {
	data: ResponseData[]
}

export interface UpdateOneParams<TVariables = object> {
	resource: string
	id: BaseKey
	variables: TVariables
	meta?: MetaQuery
}

export interface UpdateOneResponse<ResponseData> {
	data: ResponseData
}

export interface UpdateManyParams<TVariables = object> {
	resource: string
	ids: BaseKey[]
	variables: TVariables
	meta?: MetaQuery
}

export interface UpdateManyResponse<ResponseData> {
	data: ResponseData[]
}

export interface DeleteOneParams<TVariables = object> {
	resource: string
	id: BaseKey
	variables?: TVariables
	meta?: MetaQuery
}

export interface DeleteOneResponse<ResponseData> {
	data: ResponseData
}

export interface DeleteManyParams<TVariables = object> {
	resource: string
	ids: BaseKey[]
	variables?: TVariables[]
	meta?: MetaQuery
}

export interface DeleteManyResponse<ResponseData> {
	data: ResponseData[]
}

export interface CustomResponse<ResponseData> {
	data: ResponseData
}

export interface IDataContext {
	getOne: <TData extends BaseRecord>(
		params: GetOneParams
	) => Promise<GetOneResponse<TData>>
	getMany: <TData extends BaseRecord>(
		params: GetManyParams
	) => Promise<GetManyResponse<TData>>
	getList: <TData extends BaseRecord>(
		params: GetListParams
	) => Promise<GetListResponse<TData>>
	createOne: <TData extends BaseRecord>(
		params: CreateOneParams
	) => Promise<CreateOneResponse<TData>>
	createMany: <TData extends BaseRecord>(
		params: CreateManyParams
	) => Promise<CreateManyResponse<TData>>
	updateOne: <TData extends BaseRecord>(
		params: UpdateOneParams
	) => Promise<UpdateOneResponse<TData>>
	updateMany: <TData extends BaseRecord>(
		params: UpdateManyParams
	) => Promise<UpdateManyResponse<TData>>
	deleteOne: <TData extends BaseRecord>(
		params: DeleteOneParams
	) => Promise<DeleteOneResponse<TData>>
	deleteMany: <TData extends BaseRecord>(
		params: DeleteManyParams
	) => Promise<DeleteManyResponse<TData>>
}

export * from './operations'
