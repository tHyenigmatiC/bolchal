'use client'

import styles from './create.module.sass'
import { useCreatePostForm } from './useCreatePostForm'
import React from 'react'

export const CreatePost = () => {
	const { CreatePostForm } = useCreatePostForm()
	return (
		<div className={styles.create}>
			<CreatePostForm />
		</div>
	)
}
