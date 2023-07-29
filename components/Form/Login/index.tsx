'use client'

import React from 'react'
import {
	FieldError,
	FieldValues,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import styles from './login.module.sass'
import { InputProps } from '../types'
import { Wrapper } from '../Input/Wrapper'
import { loginValidationSchema } from '@schema/auth'
import { useRouter } from 'next/navigation'

export const LoginForm = ({ children }: { children: React.ReactNode }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(loginValidationSchema) })

	const router = useRouter()

	const handleLogin: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
		router.push('/')
	}

	const childrenWithLoginBindings = React.Children.map(children, (child) => {
		if (React.isValidElement<InputProps>(child) && child.type == 'input') {
			return (
				<Wrapper
					error={errors[child.props.name as string] as FieldError}
				>
					{React.cloneElement(child, {
						...child.props,
						...register(child.props.name),
						key: child.props.name,
					})}
				</Wrapper>
			)
		}

		return child
	})

	return (
		<div className={styles.container}>
			<p>Resume your activity</p>
			<form className={styles.login} onSubmit={handleSubmit(handleLogin)}>
				{childrenWithLoginBindings}
			</form>
		</div>
	)
}
