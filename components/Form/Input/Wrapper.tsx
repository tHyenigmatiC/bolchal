import React from 'react'
import { FieldError } from 'react-hook-form'

import styles from './input.module.sass'

interface WrapperProps {
	children: React.ReactNode
	error: FieldError
}

export const Wrapper = ({ children, error }: WrapperProps) => {
	return (
		<div className={styles.container}>
			{children}
			{error?.message && (
				<div
					className={styles.error}
					role="alert"
					aria-label={error.message}
				>
					{error.message}
				</div>
			)}
		</div>
	)
}
