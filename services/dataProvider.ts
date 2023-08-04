/* eslint-disable @typescript-eslint/no-explicit-any */

import { IDataContext } from '@lib/core/interfaces'
import { Databases, ID, Permission, Role } from 'appwrite'
import { getAppwriteFilters } from '@utils/getAppwriteFilters'
import { getAppwritePagination } from '@utils/getAppwritePagination'
import { getAppwriteSorting } from '@utils/getAppwriteSorting'

export const dataProvider = (
	database: Databases,
	options: { databaseId: string } = { databaseId: 'default' }
): Required<IDataContext> => {
	const { databaseId } = options
	return {
		getOne: async ({ resource, id }) => {
			const { $id, ...restData } = await database.getDocument(
				databaseId,
				resource,
				id.toString()
			)

			return {
				data: {
					id: $id,
					...restData,
				},
			} as any
		},
		getMany: async ({ resource, ids }) => {
			const data = await Promise.all(
				ids.map((id) =>
					database.getDocument(databaseId, resource, id.toString())
				)
			)

			return {
				data: data.map(({ $id, ...restData }) => ({
					id: $id,
					...restData,
				})),
			} as any
		},
		getList: async ({ resource, pagination, sort, filters }) => {
			const {
				current = 1,
				pageSize = 10,
				mode = 'server',
			} = pagination ?? {}

			const appwriteFilters = getAppwriteFilters(filters)

			const appwritePagination =
				mode === 'server'
					? getAppwritePagination(current, pageSize)
					: []

			const appwriteSorts = getAppwriteSorting(sort)

			const { total: total, documents: data } =
				await database.listDocuments(databaseId, resource, [
					...appwriteFilters,
					...appwritePagination,
					...appwriteSorts,
				])

			return {
				data: data.map(({ $id, ...restData }: { $id: string }) => ({
					id: $id,
					...restData,
				})) as any,
				total,
			}
		},
		createOne: async ({ resource, variables, meta }) => {
			const permissions = [
				Permission.read(Role.any()),
				Permission.write(Role.any()),
				...(meta?.readPermissions ?? ''),
				...(meta?.writePermissions ?? ''),
			]

			const { $id, ...restData } = await database.createDocument(
				databaseId,
				resource,
				meta?.documentId ?? ID.unique(),
				variables as object,
				permissions
			)

			return {
				data: {
					id: $id,
					...restData,
				},
			} as any
		},
		createMany: async ({ resource, variables, meta }) => {
			const permissions = [
				Permission.read(Role.any()),
				Permission.write(Role.any()),
				...(meta?.readPermissions ?? ''),
				...(meta?.writePermissions ?? ''),
			]

			const data = await Promise.all(
				variables.map((document) =>
					database.createDocument(
						databaseId,
						resource,
						meta?.documentId ?? ID.unique(),
						document as any,
						permissions
					)
				)
			)

			return {
				data: data.map(({ $id, ...restData }) => ({
					id: $id,
					...restData,
				})),
			} as any
		},
		deleteOne: async ({ resource, id }) => {
			await database.deleteDocument(databaseId, resource, id.toString())

			return {
				data: { id },
			} as any
		},
		deleteMany: async ({ resource, ids }) => {
			await Promise.all(
				ids.map((id) =>
					database.deleteDocument(databaseId, resource, id.toString())
				)
			)

			return {
				data: ids.map((id) => ({
					id,
				})),
			} as any
		},
		updateOne: async ({ resource, id, variables, meta }) => {
			const permissions = [
				Permission.read(Role.any()),
				Permission.write(Role.any()),
				...(meta?.readPermissions ?? ''),
				...(meta?.writePermissions ?? ''),
			]

			const { $id, ...restData } = await database.updateDocument(
				databaseId,
				resource,
				id.toString(),
				variables as any,
				permissions
			)

			return {
				data: {
					id: $id,
					...restData,
				},
			} as any
		},
		updateMany: async ({ resource, ids, variables, meta }) => {
			const permissions = [
				Permission.read(Role.any()),
				Permission.write(Role.any()),
				...(meta?.readPermissions ?? ''),
				...(meta?.writePermissions ?? ''),
			]

			const data = await Promise.all(
				ids.map((id) =>
					database.updateDocument(
						databaseId,
						resource,
						id.toString(),
						variables as object,
						permissions
					)
				)
			)

			return {
				data: data.map(({ $id, ...restData }) => ({
					id: $id,
					...restData,
				})),
			} as any
		},
	}
}
