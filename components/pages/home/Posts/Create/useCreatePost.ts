import { useGetIdentity } from '@lib/core/hooks'
import { useCreateOne } from '@lib/core/hooks/data/useCreateOne'
import { Permission, Role } from 'appwrite'
import { FormEventHandler } from 'react'
import { useAutoExpandingTextArea } from './useAutoExpandingTextArea'

export const useCreatePost = () => {
	const { AutoExpandingTextArea, text, setText } = useAutoExpandingTextArea({
		placeholder: "What's on your mind?",
	})

	const { user } = useGetIdentity()

	const { create } = useCreateOne()

	console.count('create Post')

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()

		const value = {
			user: user?.$id,
			description: text,
		}

		console.log(value)

		create({
			resource: 'posts',
			variables: value,
			meta: {
				readPermissions: [Permission.read(Role.any())],
				writePermission: [
					Permission.update(Role.user(user?.$id as string)),
					Permission.delete(Role.user(user?.$id as string)),
				],
			},
		}).then(() => setText(''))
	}

	return {
		handleSubmit,
		CreatePostInputArea: AutoExpandingTextArea,
	}
}
