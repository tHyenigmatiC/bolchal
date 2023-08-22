'use client'

import React from 'react'

import { ILiveContext } from '../../interfaces'
import { defaultLiveProvider } from '../../providers/live/default'

export const LiveContext = React.createContext<ILiveContext>(
	defaultLiveProvider() as ILiveContext
)
