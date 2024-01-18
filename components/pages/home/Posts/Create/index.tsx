'use client'

import Image from 'next/image'

import styles from './create.module.sass'
import { useCreatePostForm } from './useCreatePostForm'
import React from 'react'

export const CreatePost = () => {
	const { CreatePostForm } = useCreatePostForm()
	return (
		<div className={styles.create}>
			<Image
				src='https://avatars.githubusercontent.com/u/24877606'
				alt={'Profile picture of Kapil Bastola'}
				height={48}
				width={48}
				className={styles.circle}
            />
			<CreatePostForm />
		</div>
	)
}
