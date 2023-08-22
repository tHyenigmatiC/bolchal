import { useRouter } from 'next/navigation'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
	const { logout } = useAuthContext()
	const router = useRouter()

	const logoutUser = async () => {
		try {
			const response = await logout?.()
			if (response?.success) {
				router.replace(response.redirectTo ?? '/sign-in')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return {
		logoutUser,
	}
}
