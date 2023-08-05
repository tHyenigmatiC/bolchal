'use client'

import React from 'react'

import { ILiveContext } from '@lib/core/interfaces'
import { defaultLiveProvider } from '@lib/core/providers/live/default'

export const LiveContext = React.createContext<ILiveContext>(
	defaultLiveProvider() as ILiveContext
)
