import { LiveContext } from '../../context'
import React from 'react'

export const useLiveData = () => {
	const context = React.useContext(LiveContext)

	if (!context) {
		throw new Error('useLiveData hook must be used within CoreDataProvider')
	}

	return context
}
