'use client'

import { LiveContext } from '@lib/core/context'
import { ILiveContext } from '@lib/core/interfaces/live'
import { PropsWithChildren } from 'react'

export const CoreLiveDataProvider: React.FC<
	PropsWithChildren<ILiveContext>
> = ({ children, ...liveProvider }) => {
	return (
		<LiveContext.Provider value={liveProvider}>
			{children}
		</LiveContext.Provider>
	)
}
