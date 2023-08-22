import React from 'react'
import { CoreAuthProvider, CoreDataProvider } from './providers'
import { IAuthContext, IDataContext } from './interfaces'

export interface AdminProps {
	children: React.ReactNode
	authProvider: IAuthContext
	dataProvider: IDataContext
}

export const Admin = ({ children, authProvider, dataProvider }: AdminProps) => {
	return (
		<CoreAuthProvider {...authProvider}>
			<CoreDataProvider {...dataProvider}>{children}</CoreDataProvider>
		</CoreAuthProvider>
	)
}
