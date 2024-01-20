import React, { FormEventHandler, InputHTMLAttributes, useState } from 'react'
import { SubmitButton } from './button'
import { useAutoExpandingTextArea } from './useAutoExpandingTextArea'

export interface FormFields {
	text: string
}

const defaultValue = { text: '' }

export const PostForm = ({
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


	const handleImageUpload : React.ChangeEventHandler<HTMLInputElement> = async (event) => {
		const file = event?.target?.files?.[0];
		if( file ){
			const formData = new FormData();
			formData.append('image', file);
			console.log(formData)
		}
	  };

	return (
		<form onSubmit={handleSubmit}>
			{AutoExpandableTextArea}
			<div>
				<input type="file" accept="image/*" onChange={handleImageUpload} />
			</div>
			<SubmitButton disabled={values.text == ''}/>
		</form>
	)
}
