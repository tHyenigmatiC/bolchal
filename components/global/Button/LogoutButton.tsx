'use client'

import { MouseEventHandler } from 'react'

import { useLogout } from '@lib/core/hooks/auth/useLogout'
import { Button, ButtonProps } from './Button'

import styles from './button.module.sass'

export const LogoutButton = ({ children, ...props }: ButtonProps) => {
	const { logoutUser } = useLogout()

	const handleLogout: MouseEventHandler<HTMLButtonElement> = () => {
		logoutUser()
	}

	return (
		<Button
			onClick={handleLogout}
			className={styles['button-logout']}
			{...props}
		>
			{children}
		</Button>
	)
}
