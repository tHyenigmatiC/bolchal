import { useCallback, useMemo } from 'react'
import { Permission, Role } from 'appwrite'

import { useGetIdentity, useCreateOne } from '@packages/core/hooks'
import { PostForm } from './createpost'

export const useCreatePostForm = () => {
	const { user } = useGetIdentity()

	const { create } = useCreateOne()
	//

	const handleCreatePost = useCallback(
		async ({ text, media }: { text: string, media: string }) => {
			const value = {
				user: user?.$id,
				description: text,
				media: media
			}

			// await create({
			// 	resource: 'posts',
			// 	variables: value,
			// 	meta: {
			// 		readPermissions: [Permission.read(Role.any())],
			// 		writePermissions: [
			// 			Permission.update(Role.user(user?.$id as string)),
			// 			Permission.delete(Role.user(user?.$id as string)),
			// 		],
			// 	},
			// })

			console.log(value)
			
		},
		[create, user]
	)

	const CreatePostForm = useMemo(() => {
		// eslint-disable-next-line react/display-name
		return () => <PostForm onFormSubmit={handleCreatePost} />
	}, [handleCreatePost])

	return useMemo(
		() => ({
			CreatePostForm,
		}),
		[CreatePostForm]
	)
}
