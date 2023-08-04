import {
	AuthActionResponse,
	CheckAuthResponse,
	IdentityResponse,
	OnErrorResponse,
} from '@lib/core/types'

export interface IAuthContext {
	signin: (params: unknown) => Promise<AuthActionResponse>
	signup: (params: unknown) => Promise<AuthActionResponse>
	forgotPassword?: (params: unknown) => Promise<AuthActionResponse>
	updatePassword?: (params: unknown) => Promise<AuthActionResponse>
	logout: (params: unknown) => Promise<AuthActionResponse>
	checkAuth: (params?: unknown) => Promise<CheckAuthResponse>
	onError?: (params: unknown) => Promise<OnErrorResponse>
	getIdentity?: (params: unknown) => Promise<IdentityResponse>
}
