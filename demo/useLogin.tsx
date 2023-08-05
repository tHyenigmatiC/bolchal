'use client'

import { account } from '@services/appwriteClient'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useLogin = () => {
	const router = useRouter()

	useEffect(() => {
		let mounted = true
		if (mounted) {
			account.get().then(
				() => {
					router.push('/')
				},
				() => {}
			)
		}

		return () => {
			mounted = false
		}
	}, [router])

	const login = async ({ name }: { name: string }) => {
		await account.createAnonymousSession()
		await account.updateName(name)
		router.push('/')
	}

	return { login }
}
