import { CrudFilters } from '@packages/core/interfaces'
import { generateFilter } from './generateFilters'

type GetAppwriteFiltersType = {
	(filters?: CrudFilters): string[]
}

export const getAppwriteFilters: GetAppwriteFiltersType = (filters) => {
	const appwriteFilters: string[] = []

	for (const filter of filters ?? []) {
		if (
			filter.operator !== 'or' &&
			filter.operator !== 'and' &&
			'field' in filter
		) {
			const filterField = filter.field === 'id' ? '$id' : filter.field

			appwriteFilters.push(
				generateFilter({
					...filter,
					field: filterField,
				})
			)
		}
	}

	return appwriteFilters
}
