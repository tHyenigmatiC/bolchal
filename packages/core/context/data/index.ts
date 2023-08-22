'use client'

import React from 'react'

import { IDataContext } from '../../interfaces/data'
import { defaultDataProvider } from '../../providers/data/default'

export const DataContext = React.createContext<IDataContext>(
	defaultDataProvider() as IDataContext
)
