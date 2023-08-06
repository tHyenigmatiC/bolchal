'use client'

import {
	ChangeEventHandler,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import styles from './page.module.sass'
import { Models } from 'appwrite'
import { useChatMessages } from '../../hooks/useChatMessages'

export type ChatMessage = Models.Document & {
	name: string
	message: string
}

const Messages = () => {
	const { messages, sendMessage, updateMessages } = useChatMessages()

	const [message, setMessage] = useState('')

	const chatsRef = useRef<HTMLUListElement>(null)
	const showLatest = useRef<boolean>(true)
	const scrolledDivPosition = useRef<Element>()

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setMessage(e.target.value)
	}

	const submit = () => {
		sendMessage({ message })
		setMessage('')
		showLatest.current = true
	}

	const handleScroll = useCallback(() => {
		const position = chatsRef.current?.scrollTop as number
		if (position < 100) {
			scrolledDivPosition.current = chatsRef.current
				?.firstElementChild as Element
			showLatest.current = false
			updateMessages()
		}
	}, [updateMessages])

	useEffect(() => {
		if (showLatest.current) {
			chatsRef.current?.lastElementChild?.scrollIntoView()
		}

		if (scrolledDivPosition.current) {
			alert('here')
			scrolledDivPosition.current.scrollIntoView()
		}
	}, [messages])

	useEffect(() => {
		const container = chatsRef.current
		container?.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			container?.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

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
