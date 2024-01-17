interface ITrending {
	category?: string
	content: string
	other?: string
}
interface ITrendingList {
	data: ITrending[]
}

interface IFollowRecommendtations {
	image: string
	name: string
	username: string
}

interface IFollowRecommendtationsList {
	data: IFollowRecommendtations[]
}

export const MockTrending: ITrendingList = {
	data: [
		{
			content: 'Men Fashion Week',
			other: 'Fashion · Live',
		},
		{
			category: 'Trending',
			content: '#typescript',
		},
		{
			category: 'Business & finance · Trending',
			content: '#IREDA',
			other: 'Trending with #IRFC',
		},
		{
			category: 'Trending in India',
			content: '#HDFCBANK',
		},
		{
			category: 'Entertainment · Trending',
			content: '#Chiranjeevi',
			other: 'Trending with Prabhas, #Mega156',
		},
	],
}

export const MockFollowRecommendations = {
	data: [
		{
			image: 'https://avatars.githubusercontent.com/u/24877606',
			name: 'Teradata',
			username: 'Teradata',
		},
		{
			image: 'https://avatars.githubusercontent.com/u/24877606',
			name: 'Dr. Joy Buolamwini',
			username: 'jovialjoy',
		},
		{
			image: 'https://avatars.githubusercontent.com/u/24877606',
			name: 'Sabrina',
			username: 'stuffsabsays',
		},
	],
}
