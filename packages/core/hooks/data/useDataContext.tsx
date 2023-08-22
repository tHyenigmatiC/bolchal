import React from 'react'
import { DataContext } from '../../context'

export const useDataContext = () => {
	const context = React.useContext(DataContext)

	if (!context) {
		throw new Error(
			'useDataContext hooks should be used inside CoreDataProvider'
		)
	}

	return context
}
