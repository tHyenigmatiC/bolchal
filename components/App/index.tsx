import React from 'react'

import { appwriteClient, database, account } from '@services/appwriteClient'
import { Admin } from '@lib/core'
import { authProvider } from '@services/authProvider'
import { dataProvider } from '@services/dataProvider'
import { liveProvider } from '@services/liveProvider'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Admin
			authProvider={authProvider(account)}
			dataProvider={dataProvider(database, {
				databaseId: 'default',
			})}
			liveProvider={liveProvider(appwriteClient, {
				databaseId: process.env.NEXT_PUBLIC_DATABASE_ID as string,
			})}
		>
			{children}
		</Admin>
	)
}
