import { LiveEvent } from '@lib/core'

export const getAppEvent = (event: string): LiveEvent['type'] | undefined => {
	if (event.includes('.create')) {
		return 'created'
	} else if (event.includes('.update')) {
	} else if (event.includes('.delete')) {
		return 'deleted'
	}

	return undefined
}
