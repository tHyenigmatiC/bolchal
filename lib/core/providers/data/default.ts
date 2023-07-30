export const defaultDataProvider = () => {
	return {
		getOne: () => Promise.resolve({ data: { id: 1 } }),
		getMany: () => Promise.resolve({ data: [] }),
		getList: () => Promise.resolve({ data: [], total: 0 }),
		createOne: () => Promise.resolve({ data: { id: 1 } }),
		createMany: () => Promise.resolve({ data: [] }),
		updateOne: () => Promise.resolve({ data: { id: 1 } }),
		updateMany: () => Promise.resolve({ data: [] }),
		deleteOne: () => Promise.resolve({ data: { id: 1 } }),
		deleteMany: () => Promise.resolve({ data: [] }),
	}
}
