import React, { FormEventHandler, useState } from 'react'
import { SubitButton } from './button'
import { useAutoExpandingTextArea } from './useAutoExpandingTextArea'

export interface FormFields {
	text: string
}

const defaultValue = { text: '' }

export const CreatePostForm = ({
	onFormSubmit,
}: {
	onFormSubmit: (fields: FormFields) => Promise<void>
}) => {
	const [values, setValues] = useState<FormFields>(defaultValue)

	const { AutoExpandableTextArea } = useAutoExpandingTextArea({
		placeholder: "What's on your mind?",
		value: values.text,
		onChange: (e) => setValues({ ...values, text: e.currentTarget.value }),
	})

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		onFormSubmit(values).then(() => setValues(defaultValue))
	}

	return (
		<form onSubmit={handleSubmit}>
			<AutoExpandableTextArea />
			<SubitButton />
		</form>
	)
}
