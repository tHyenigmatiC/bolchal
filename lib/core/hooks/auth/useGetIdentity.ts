import { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { Models } from 'appwrite'

export const useGetIdentity = () => {
	const { getIdentity } = useAuthContext()

	const [user, setUser] = useState<Models.User<Models.Preferences>>()

	useEffect(() => {
		const loadUser = async () => {
			try {
				const response = await getIdentity?.()
				setUser(response as Models.User<Models.Preferences>)
			} catch (error) {
				console.log(error)
			}
		}

		loadUser()
	}, [])

	return {
		user,
	}
}
