import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
	const { logout } = useAuthContext()

	const logoutUser = async () => {
		await logout?.()
	}

	return {
		logoutUser,
	}
}
