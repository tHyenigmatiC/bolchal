import { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useCheckAuth = () => {
	const { checkAuth } = useAuthContext()

	const [authenticated, setIsAuthenticated] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		const checkAuthentication = async () => {
			const response = await checkAuth?.()
			setIsAuthenticated(response?.authenticated ?? false)
			setIsLoading(false)
		}

		checkAuthentication()
	}, [checkAuth])

	return { authenticated, isLoading }
}
