import { useAuthContext } from './useAuthContext'
import { useRouter } from 'next/navigation'

export const useSignIn = () => {
	const { signin } = useAuthContext()
	const router = useRouter()

	const signInUser = async (params: unknown) => {
		try {
			const response = await signin?.(params)
			if (response?.success) {
				router.replace(response.redirectTo ?? '/sign-in')
			}
		} catch (error) {
			console.error(error)
		}
	}

	return {
		signInUser,
	}
}
