/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

export const useCallbackWithErrorHandling = (
	callback: (...args: any) => void
) => {
	const [, setState] = useState()

	return (...args: any) => {
		try {
			callback(...args)
		} catch (e) {
			setState(() => {
				throw e
			})
		}
	}
}
