'use client'

import React from 'react'

import { useCheckAuth } from '@lib/core/hooks'
import { redirect } from 'next/navigation'
import { AuthPageProps } from '.'

export const RedirectIfAuth = ({ redirectTo, children }: AuthPageProps) => {
	const { authenticated } = useCheckAuth()

	if (authenticated) {
		if (redirectTo) {
			redirect(redirectTo)
		}
		redirect('/')
	}

	return <>{children}</>
}
