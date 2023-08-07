'use client'

import styles from './register.module.sass'
import {
	FieldError,
	FieldValues,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerValidationSchema } from '@schema/auth'
import React from 'react'
import { Wrapper } from '../input/Wrapper'
import { InputProps } from '../types'
import { useRouter } from 'next/navigation'

export const RegisterForm = ({ children }: { children: React.ReactNode }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(registerValidationSchema) })

	const router = useRouter()

	const handleRegister: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
		router.push('/')
	}

	const childrenWithRegisterBindings = React.Children.map(
		children,
		(child) => {
			if (
				React.isValidElement<InputProps>(child) &&
				child.type == 'input'
			) {
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
		}
	)

	return (
		<div className={styles.container}>
			<p>Let&apos;s Get Started</p>
			<form
				className={styles.register}
				onSubmit={handleSubmit(handleRegister)}
			>
				{childrenWithRegisterBindings}
			</form>
		</div>
	)
}
