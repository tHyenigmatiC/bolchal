import { GetListParams } from '../../interfaces'
import { useDataContext } from './useDataContext'

export const useGetList = (initalParams?: GetListParams) => {
	const { getList } = useDataContext()

	const loadData = async (calltimeParams?: GetListParams) => {
		const params = initalParams ?? calltimeParams

		if (!params) {
			throw new Error('no params was provided to getlist data')
		}

		try {
			const response = await getList(params as GetListParams)
			return response
		} catch (error) {
			console.log(error)
		}
	}

	return {
		loadData,
	}
}
