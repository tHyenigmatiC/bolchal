import { useCallback, useMemo } from 'react'
import { Permission, Role } from 'appwrite'

import { useGetIdentity, useCreateOne } from '@lib/core/hooks'
import { CreatePostForm } from './form'

export const useCreatePostForm = () => {
	const { user } = useGetIdentity()

	const { create } = useCreateOne()

	console.count('useCreatePostForm')

	const createPost = useCallback(
		async ({ text }: { text: string }) => {
			const value = {
				user: user?.$id,
				description: text,
			}

			await create({
				resource: 'posts',
				variables: value,
				meta: {
					readPermissions: [Permission.read(Role.any())],
					writePermission: [
						Permission.update(Role.user(user?.$id as string)),
						Permission.delete(Role.user(user?.$id as string)),
					],
				},
			})
		},
		[create, user]
	)

	const CreatePost = useMemo(() => {
		// eslint-disable-next-line react/display-name
		return () => <CreatePostForm onFormSubmit={createPost} />
	}, [createPost])

	return useMemo(
		() => ({
			CreatePostForm: CreatePost,
		}),
		[CreatePost]
	)
}
