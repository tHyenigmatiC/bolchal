'use client'
import React from 'react'

import { Admin } from '@packages/core'
import { account, database } from '@services/appwriteClient'
import { authProvider } from '@services/authProvider'
import { dataProvider } from '@services/dataProvider'

export const BolchalApp = ({ children }: { children: React.ReactNode }) => {
	return (
		<Admin
			authProvider={authProvider(account)}
			dataProvider={dataProvider(database)}
		>
			{children}
		</Admin>
	)
}
