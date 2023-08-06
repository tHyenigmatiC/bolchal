/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StaticPagination {
	current?: number
	pageSize?: number
	mode?: 'client' | 'server' | 'off'
}

export interface CursorPagination {
	cursor: string
	pageSize?: number
	direction: 'after' | 'before'
	mode?: 'client' | 'server' | 'off'
}

export type Pagination = StaticPagination | CursorPagination

export type CrudOperators =
	| 'eq'
	| 'ne'
	| 'lt'
	| 'gt'
	| 'lte'
	| 'gte'
	| 'in'
	| 'nin'
	| 'contains'
	| 'ncontains'
	| 'containss'
	| 'ncontainss'
	| 'between'
	| 'nbetween'
	| 'null'
	| 'nnull'
	| 'startswith'
	| 'nstartswith'
	| 'startswiths'
	| 'nstartswiths'
	| 'endswith'
	| 'nendswith'
	| 'endswiths'
	| 'nendswiths'
	| 'or'
	| 'and'

export type SortOrder = 'desc' | 'asc' | null

export type LogicalFilter = {
	field: string
	operator: Exclude<CrudOperators, 'or' | 'and'>
	value: any
}

export type ConditionalFilter = {
	key?: string
	operator: Extract<CrudOperators, 'or' | 'and'>
	value: any
}

export type CrudFilter = LogicalFilter | ConditionalFilter

export type CrudSort = {
	field: string
	order: SortOrder
}

export type CrudFilters = CrudFilter[]
export type CrudSorting = CrudSort[]
