'use client'

import { Account, ID } from 'appwrite'

import { HttpError, IAuthContext } from '@lib/core'

export type LoginProps = {
	email: string
	password: string
}

export type RegisterProps = {
	name: string
} & LoginProps

export const authProvider = (account: Account): IAuthContext => {
	return {
		// TODO use auth login
		// signin: async (params) => {
		// 	const { email, password } = params as LoginProps
		// 	try {
		// 		const data = await account.createEmailSession(email, password)

		// 		console.log(data)
		// 		return {
		// 			success: true,
		// 			redirectTo: '/',
		// 		}
		// 	} catch (error) {
		// 		return {
		// 			success: false,
		// 			error: error as HttpError,
		// 		}
		// 	}
		// },
		signin: async (params) => {
			const { email } = params as LoginProps
			try {
				await account.createAnonymousSession()
				await account.updateName(email.split('@')[0])

				return {
					success: true,
					redirectTo: '/',
				}
			} catch (error) {
				return {
					success: false,
					error: error as HttpError,
				}
			}
		},
		signup: async (params) => {
			const { name, email, password } = params as RegisterProps
			try {
				const data = await account.create(
					ID.unique(),
					email,
					password,
					name
				)

				console.log(data)

				return {
					success: true,
					redirectTo: '/',
				}
			} catch (error) {
				return {
					success: false,
					error: error as HttpError,
				}
			}
		},
		checkAuth: async () => {
			try {
				const session = await account.getSession('current')
				console.log(session)

				if (session) {
					return {
						authenticated: true,
					}
				}
			} catch (error) {
				return {
					authenticated: false,
					redirectTo: '/login',
					logout: true,
					error: error as HttpError,
				}
			}

			return {
				authenticated: false,
				redirectTo: '/login',
			}
		},
		logout: async () => {
			try {
				const data = await account.deleteSession('current')
				console.log(data)
				return {
					success: true,
					redirectTo: '/login',
				}
			} catch (error) {
				return {
					success: false,
					error: error as HttpError,
				}
			}
		},
		getIdentity: async () => {
			try {
				const user = await account.get()

				if (user) {
					return user
				}

				return null
			} catch (error) {
				return null
			}
		},
	}
}
