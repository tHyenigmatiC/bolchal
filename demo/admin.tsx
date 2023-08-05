import React from 'react'
import { CoreLiveDataProvider } from '@lib/core/providers'
import { ILiveContext } from '@lib/core/interfaces'

export interface AdminProps {
	children: React.ReactNode
	liveProvider: ILiveContext
}

export const Admin = ({ children, liveProvider }: AdminProps) => {
	return (
		<CoreLiveDataProvider {...liveProvider}>
			{children}
		</CoreLiveDataProvider>
	)
}
