import React from 'react'

import { useGetIdentity, useNavigation } from '@lib/core/hooks'

export interface AuthPageProps {
	children: React.ReactNode
	redirectTo?: string
}

export const Authenticated = ({ redirectTo, children }: AuthPageProps) => {
	const { user } = useGetIdentity()
	const navigate = useNavigation()

	if (!user) {
		if (redirectTo) {
			navigate({ to: redirectTo })
		}
		navigate({ to: '/sign-in' })
	}

	return <>{children}</>
}
