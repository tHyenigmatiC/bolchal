import { CursorPagination, Pagination, StaticPagination } from '@packages/core'
import { Query } from 'appwrite'

export const getAppwritePagination = (pagination?: Pagination) => {
	if (!pagination) {
		return []
	}

	if ((pagination as CursorPagination).cursor) {
		const { cursor, pageSize, direction } = pagination as CursorPagination
		if (direction == 'after') {
			return [Query.limit(pageSize ?? 10), Query.cursorAfter(cursor)]
		} else {
			return [Query.limit(pageSize ?? 10), Query.cursorBefore(cursor)]
		}
	}

	const { current, pageSize } = (pagination as StaticPagination) ?? {
		current: 1,
		pageSize: 10,
	}
	return [
		Query.offset(((current as number) - 1) * (pageSize as number)),
		Query.limit(pageSize as number),
	]
}
