'use server'

import { LiveEvent } from '@lib/core/interfaces'

export const callback = async (event: LiveEvent) => {
	const { payload } = event
	return payload
}
