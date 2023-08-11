import { useRouter } from 'next/router'
import React from 'react'

import styles from './link.module.sass'

export interface LinkProps {
	href: string
	children: React.ReactNode
}

export const Link = ({ href, children }: LinkProps) => {
	const router = useRouter()

	const handleOnClick = () => {
		router.push(href)
	}

	return (
		<button
			className={styles.link}
			onClick={handleOnClick}
			aria-label="link"
		>
			{children}
		</button>
	)
}
