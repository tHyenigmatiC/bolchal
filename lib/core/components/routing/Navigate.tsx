'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Navigate = ({
	to,
	replace = false,
}: {
	to: string
	replace: boolean
}) => {
	const router = useRouter()

	useEffect(() => {
		if (replace) {
			router.replace(to)
		}
		router.push(to)
	}, [replace, router, to])

	return null
}
