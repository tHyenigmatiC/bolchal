'use client'

import React from 'react'

import { IDataContext } from '@lib/core/interfaces/data'
import { defaultDataProvider } from '@lib/core/providers/data/default'

export const DataContext = React.createContext<IDataContext>(
	defaultDataProvider() as IDataContext
)
