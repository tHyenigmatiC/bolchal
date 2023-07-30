import { IDataContext } from '@lib/core/interfaces/data'
import { defaultDataProvider } from '@lib/core/providers/data/default'
import React from 'react'

export const DataContext = React.createContext<IDataContext>(
	defaultDataProvider() as IDataContext
)
