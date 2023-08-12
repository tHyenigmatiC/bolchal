'use client'

import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'

import styles from './create.module.sass'
import useAutosizeTextArea from '@hooks/useAutoSizeTextArea'
import { ComplimentaryButton } from '@components/global'
import { useGetIdentity } from '@lib/core/hooks'
import { useCreateOne } from '@lib/core/hooks/data/useCreateOne'

export const CreatePost = () => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null)
	const [text, setText] = useState<string>('')

	const { user } = useGetIdentity()

	user?.$id

	const { create } = useCreateOne()

	useAutosizeTextArea(textAreaRef.current, text)

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		setText(event.target?.value)
	}

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
		}).then(() => setText(''))
	}
	return (
		<div className={styles.create}>
			<form onSubmit={handleSubmit}>
				<textarea
					ref={textAreaRef}
					value={text}
					onChange={handleChange}
					placeholder="What's on your mind?"
					rows={2}
				/>
				<div className={styles.actions}>
					<ComplimentaryButton type="submit">
						Post
					</ComplimentaryButton>
				</div>
			</form>
		</div>
	)
}
