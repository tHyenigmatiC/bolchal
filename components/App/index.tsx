'use client'

import React from 'react'

import { appwriteClient } from '@services/appwriteClient'
import { liveProvider } from '@services/liveProvider'
import { Admin } from '@demo'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Admin
			liveProvider={liveProvider(appwriteClient, {
				databaseId: process.env.NEXT_PUBLIC_DATABASE_ID as string,
			})}
		>
			{children}
		</Admin>
	)
}
