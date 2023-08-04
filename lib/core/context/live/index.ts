import { ILiveContext } from '@lib/core/interfaces'
import { defaultLiveProvider } from '@lib/core/providers/live/default'
import React from 'react'

export const LiveContext = React.createContext<ILiveContext>(
	defaultLiveProvider() as ILiveContext
)
