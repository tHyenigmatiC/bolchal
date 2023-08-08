'use client'

import React from 'react'

import { Realtime } from '@lib/core'
import { appwriteClient } from '@services/appwriteClient'
import { liveProvider } from '@services/liveProvider'

export const RealtimeWrapper = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<Realtime
			liveProvider={liveProvider(appwriteClient, {
				databaseId: process.env.NEXT_PUBLIC_CHAT_DATABASE_ID as string,
			})}
		>
			{children}
		</Realtime>
	)
}
