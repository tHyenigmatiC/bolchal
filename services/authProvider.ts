import { HttpError, IAuthContext } from '@lib/core'
import { Account, ID } from 'appwrite'

export type LoginProps = {
	email: string
	password: string
}

export type RegisterProps = {
	name: string
} & LoginProps

export const authProvider = (account: Account): IAuthContext => {
	return {
		signin: async (params) => {
			const { email, password } = params as LoginProps
			try {
				const data = await account.createEmailSession(email, password)

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
					redirectTo: '/sign-in',
					logout: true,
					error: error as HttpError,
				}
			}

			return {
				authenticated: false,
				redirectTo: '/sign-in',
			}
		},
		logout: async () => {
			try {
				const data = await account.deleteSession('current')
				console.log(data)
				return {
					success: true,
					redirectTo: '/sign-in',
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
				const data = await account.get()
				const { email, name, phone, status } = data

				return {
					email,
					name,
					phone,
					status,
				}
			} catch (error) {
				return null
			}
		},
	}
}
