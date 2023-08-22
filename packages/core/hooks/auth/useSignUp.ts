import { redirect } from 'next/navigation'
import { useAuthContext } from './useAuthContext'
import { RedirectType } from 'next/dist/client/components/redirect'

export const useSignUp = () => {
	const { signup } = useAuthContext()

	const handleSignUpNewUser = async (params: unknown) => {
		try {
			const response = await signup?.(params)
			if (response?.success) {
				redirect(response.redirectTo ?? '/', RedirectType.replace)
			}
			alert('do nothing')
		} catch (error) {
			console.error(error)
		}
	}

	return {
		handleSignUpNewUser,
	}
}
