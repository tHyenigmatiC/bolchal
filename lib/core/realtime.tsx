import React from 'react'
import { ILiveContext } from './interfaces'
import { CoreLiveDataProvider } from './providers'

export type RealtimeProps = {
	children: React.ReactNode
	liveProvider: ILiveContext
}

export const Realtime = ({ children, liveProvider }: RealtimeProps) => {
	return (
		<CoreLiveDataProvider {...liveProvider}>
			{children}
		</CoreLiveDataProvider>
	)
}
