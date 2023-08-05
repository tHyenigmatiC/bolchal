import { CreateOneParams } from '@lib/core/interfaces'
import { useDataContext } from './useDataContext'

export const useCreateOne = () => {
	const { createOne } = useDataContext()

	const create = async (params: CreateOneParams) => {
		try {
			const data = await createOne(params)
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return {
		create,
	}
}
