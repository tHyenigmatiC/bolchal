'use client'

import { MouseEventHandler } from 'react'
import styles from './button.module.sass'

type Props = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any
}

export type ButtonProps = Props & {
	children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}

export const PrimaryButton = ({ children, ...props }: ButtonProps) => {
	return (
		<button className={styles.buttonPrimary} {...props}>
			{children}
		</button>
	)
}

export const SecondaryButton = ({ children, ...props }: ButtonProps) => {
	return (
		<button className={styles.buttonSecondary} {...props}>
			{children}
		</button>
	)
}
