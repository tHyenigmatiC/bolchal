import React from 'react'
import { AuthContext } from '../../context'

export const useAuthContext = () => {
	const context = React.useContext(AuthContext)
	if (!context) {
		throw new Error(
			'useAuthContext hook must be used within CoreAuthProvider'
		)
	}
	return context
}
