'use client'

import React from 'react'

import { useCheckAuth } from '../../hooks'

export interface AuthPageProps {
	children: React.ReactNode
	redirectTo?: string
	fallbackContent?: React.ReactNode
	loadingContent?: React.ReactNode
}

export const Authenticated = ({
	loadingContent,
	fallbackContent,
	children,
}: AuthPageProps) => {
	const { authenticated, isLoading } = useCheckAuth()
	const state = React.useRef<{
		status: 'initial' | 'pending' | 'settled'
		content: React.ReactNode
	}>({
		status: isLoading ? 'initial' : 'settled',
		content: loadingContent ?? null,
	})

	if (!isLoading) {
		state.current.status = 'settled'
	}

	if (state.current.status == 'settled') {
		if (authenticated) {
			state.current.content = children
		} else {
			state.current.content = fallbackContent
		}
	}

	return <>{state.current.content}</>
}
