import { GetListParams } from '@lib/core/interfaces'
import { useDataContext } from './useDataContext'

export const useGetList = (params: GetListParams) => {
	const { getList } = useDataContext()

	const loadData = async () => {
		try {
			const response = await getList(params)
			return response
		} catch (error) {
			console.log(error)
		}
	}

	return {
		loadData,
	}
}
