'use client'

import React, { PropsWithChildren } from 'react'

import { IDataContext } from '@lib/core/interfaces/data'
import { DataContext } from '@lib/core/context'

export const CoreDataProvider: React.FC<PropsWithChildren<IDataContext>> = ({
	children,
	...dataProvider
}) => {
	return (
		<DataContext.Provider value={dataProvider}>
			{children}
		</DataContext.Provider>
	)
}
