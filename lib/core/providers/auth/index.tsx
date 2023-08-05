'use client'

import { PropsWithChildren } from 'react'

import { AuthContext } from '@lib/core/context'
import { IAuthContext } from '@lib/core/interfaces'

export const CoreAuthProvider: React.FC<PropsWithChildren<IAuthContext>> = ({
	children,
	...authProvider
}) => {
	const handleSignIn = async (params: unknown) => {
		try {
			const result = await authProvider.signin(params)
			return result
		} catch (error) {
			console.warn('unhandled error, please handle it properly', error)
			return Promise.reject(error)
		}
	}

	const handleSignUp = async (params: unknown) => {
		try {
			const result = await authProvider.signup(params)
			return result
		} catch (error) {
			console.warn('unhandled error, please handle it properly', error)
			return Promise.reject(error)
		}
	}

	const handleForgotPassword = async (params: unknown) => {
		try {
			const result = await authProvider.forgotPassword?.(params)
			return result
		} catch (error) {
			console.warn('unhandled exception, please handle it', error)
			return Promise.reject(error)
		}
	}

	const handleUpdatePassword = async (params: unknown) => {
		try {
			const result = await authProvider.updatePassword?.(params)
			return result
		} catch (error) {
			console.warn('unhandled exception, handle it properly', error)
			return Promise.reject(error)
		}
	}

	const handleAuthCheck = async (params: unknown) => {
		try {
			const result = await authProvider.checkAuth(params)
			return result
		} catch (error) {
			console.warn(
				'unhandled exception, please handle it properly',
				error
			)
			return Promise.reject(error)
		}
	}

	const handleLogout = async (params: unknown) => {
		try {
			const result = await authProvider.logout(params)
			return result
		} catch (error) {
			console.warn(
				'unhandled exception, please handle it properly',
				error
			)
			return Promise.reject(error)
		}
	}

	const handleGetIdentity = async (params: unknown) => {
		try {
			const result = await authProvider.getIdentity?.(params)
			return result
		} catch (error) {
			console.warn(
				'unhandled exception, please handle it properly',
				error
			)
			return Promise.reject(error)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				...authProvider,
				signin: handleSignIn as IAuthContext['signin'],
				signup: handleSignUp as IAuthContext['signup'],
				checkAuth: handleAuthCheck as IAuthContext['checkAuth'],
				forgotPassword:
					handleForgotPassword as IAuthContext['forgotPassword'],
				updatePassword:
					handleUpdatePassword as IAuthContext['updatePassword'],
				logout: handleLogout as IAuthContext['logout'],
				getIdentity: handleGetIdentity as IAuthContext['getIdentity'],
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
