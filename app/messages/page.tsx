'use client'

import { ChangeEventHandler, useLayoutEffect, useRef, useState } from 'react'
import { useChat } from '@demo'
import styles from './page.module.sass'

const Messages = () => {
	const { messages, sendMessage } = useChat()
	const [message, setMessage] = useState('')

	const chatsRef = useRef<HTMLUListElement>(null)

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setMessage(e.target.value)
	}

	const submit = () => {
		sendMessage({ message })
		setMessage('')
	}

	useLayoutEffect(() => {
		let mounted = true
		if (mounted) {
			chatsRef.current?.lastElementChild?.scrollIntoView()
		}

		return () => {
			mounted = false
		}
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
