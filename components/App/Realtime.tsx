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
				databaseId: 'chat',
			})}
		>
			{children}
		</Realtime>
	)
}
