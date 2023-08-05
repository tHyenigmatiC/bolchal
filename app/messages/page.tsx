'use client'

import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import styles from './page.module.sass'
import { Models } from 'appwrite'
import { useChatMessages } from '../../hooks/useChatMessages'

export type ChatMessage = Models.Document & {
	name: string
	message: string
}

const Messages = () => {
	const { messages, sendMessage } = useChatMessages()

	const [message, setMessage] = useState('')

	const chatsRef = useRef<HTMLUListElement>(null)

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setMessage(e.target.value)
	}

	const submit = () => {
		sendMessage({ message })
		setMessage('')
	}

	useEffect(() => {
		chatsRef.current?.lastElementChild?.scrollIntoView()
	}, [messages])

	return (
		<main className={styles.main}>
			<section className={styles.container}>
				<ul className={styles.chats} ref={chatsRef}>
					{messages.map((message, index) => (
						<li className={styles.chat} key={index}>
							<span className={styles.user}>
								{message.user.split('@')[0]}:
							</span>
							{message.message}
						</li>
					))}
				</ul>
				<div className={styles['add-message']}>
					<input
						className={styles['chat-input']}
						value={message}
						onChange={handleOnChange}
					/>
					<button className={styles.button} onClick={submit}>
						Send
					</button>
				</div>
			</section>
		</main>
	)
}

export default Messages
