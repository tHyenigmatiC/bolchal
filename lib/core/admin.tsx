import React from 'react'
import {
	CoreAuthProvider,
	CoreDataProvider,
	CoreLiveDataProvider,
} from './providers'
import { IAuthContext, IDataContext, ILiveContext } from './interfaces'

export interface AdminProps {
	children: React.ReactNode
	authProvider: IAuthContext
	dataProvider: IDataContext
	liveProvider: ILiveContext
}

export const Admin = ({
	children,
	authProvider,
	dataProvider,
	liveProvider,
}: AdminProps) => {
	return (
		<CoreAuthProvider {...authProvider}>
			<CoreDataProvider {...dataProvider}>
				<CoreLiveDataProvider {...liveProvider}>
					{children}
				</CoreLiveDataProvider>
			</CoreDataProvider>
		</CoreAuthProvider>
	)
}
