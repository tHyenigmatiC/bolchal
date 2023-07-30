import { HttpError as CoreError } from '../errors'

export type AuthActionResponse = {
	success: boolean
	redirectTo?: string
	error?: Error | CoreError
	[key: string]: unknown
}

export type OnErrorResponse = {
	redirectTo?: string
	logout?: boolean
	error?: Error | CoreError
}

export type CheckAuthResponse = {
	authenticated: boolean
	redirectTo?: string
	logout?: boolean
	error?: Error | CoreError
}

export type IdentityResponse = unknown
