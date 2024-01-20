import React, { FormEventHandler, useState } from 'react'
import Image from 'next/image'

// emoji modules
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { SubmitButton } from './button'
import { useAutoExpandingTextArea } from './useAutoExpandingTextArea'
import styles from './create.module.sass'

export interface FormFields {
	text: string
	media: string
}

const defaultValue = { text: '', media: '' }

export const PostForm = ({
	onFormSubmit,
}: {
	onFormSubmit: (fields: FormFields) => Promise<void>
}) => {
	const [values, setValues] = useState<FormFields>(defaultValue)

	const [showEmojiPicker, setShowEmojiPicker] = useState(false)
	const [file, setFile] = useState('')


	const toggleEmojiPicker = () => {
		setShowEmojiPicker(prevValue => !prevValue)
	}

	const handleImageSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(e.target.files){
			setFile(URL.createObjectURL(e.target.files[0]));
		}
    }

	const { AutoExpandableTextArea } = useAutoExpandingTextArea({
		placeholder: "What's on your mind?",
		value: values.text,
		onChange: (e) => setValues({ ...values, text: e.currentTarget.value }),
	})

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		onFormSubmit(values).then(() => setValues(defaultValue))
	}


	// const handleImageUpload : React.ChangeEventHandler<HTMLInputElement> = async (event) => {
	// 	const file = event?.target?.files?.[0];
	// 	if( file ){
	// 		const formData = new FormData();
	// 		formData.append('image', file);
	// 		console.log(formData)
	// 	}
	//   };


	  const handleEmojiSelection = (data: any) => {
		setValues({ ...values, text : `${values.text}${data.native}` })
	  }

	return (
		<form onSubmit={handleSubmit}>
			{AutoExpandableTextArea}
			{
				file && 
				<div className={styles.imagePreview}>
					<button type='button' onClick={() => setFile('')}>
						<Image
							src='/close-circle.svg'
							alt="Cross Icon"
							width={32}
							height={32}
						/>
					</button>
					<Image
						src={file}
						alt="Picture of the image icon"
						fill={true}
						style={{
							objectFit: 'fill',
						}}
					/>
				</div>
			}
			<div className={styles.row}>
				<div className={styles.inputOptions}>
					<label className={styles.imagepicker}>
						<input type="file" accept="image/*" onChange={handleImageSelect} />
						<Image
							src='/image.svg'
							alt="Picture of the image icon"
							height={20}
							width={20}
						/>
					</label>
					<div>
						<button type='button' className={styles.emojiButton} onClick={toggleEmojiPicker}>
							<Image
								src='/emoji.svg'
								alt="Picture of the image icon"
								height={20}
								width={20}
							/>
						</button>
						{
							showEmojiPicker && 
								<div className={styles.emojiPicker}>
									<Picker data={data} onEmojiSelect={handleEmojiSelection} navPosition="bottom" onClickOutside={toggleEmojiPicker}/>
								</div>
						}
					</div>
				</div>
				<SubmitButton disabled={values.text == ''}/>
			</div>
		</form>
	)
}
