'use client'

import styles from './create.module.sass'
import { ComplimentaryButton } from '@components/global'
import { useCreatePost } from './useCreatePost'

export const CreatePost = () => {
	const { CreatePostInputArea, handleSubmit } = useCreatePost()

	return (
		<div className={styles.create}>
			<form onSubmit={handleSubmit}>
				{CreatePostInputArea()}
				<SubitButton />
			</form>
		</div>
	)
}

const SubitButton = () => (
	<div className={styles.actions}>
		<ComplimentaryButton type="submit">Post</ComplimentaryButton>
	</div>
)
