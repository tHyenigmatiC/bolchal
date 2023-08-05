import { useRouter } from 'next/navigation'
import { useAuthContext } from './useAuthContext'

export const useSignIn = () => {
	const { signin } = useAuthContext()

	const router = useRouter()

	const signInUser = async (params: unknown) => {
		try {
			const response = await signin?.(params)
			if (response?.success) {
				if (response.redirectTo) {
					router.push(response.redirectTo)
				} else {
					router.push('/')
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	return {
		signInUser,
	}
}
