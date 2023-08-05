'use client'

import { PropsWithChildren } from 'react'

import { LiveContext } from '@lib/core'
import { ILiveContext } from '@lib/core/interfaces/live'

export const CoreLiveDataProvider: React.FC<
	PropsWithChildren<ILiveContext>
> = ({ children, ...liveProvider }) => {
	return (
		<LiveContext.Provider value={liveProvider}>
			{children}
		</LiveContext.Provider>
	)
}
