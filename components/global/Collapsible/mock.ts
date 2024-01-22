export interface IDirectMessage {
	image: string
	name: string
	username: string
	date: string
	message: string
}

export interface IDirectMessageList {
	data: IDirectMessage[]
}

export const MockDirectMessages: IDirectMessageList = {
	data: [
		{
			image: 'https://avatars.githubusercontent.com/u/24877606',
			name: 'Teradata',
			username: 'Teradata',
			date: '2024 Jan 20',
			message: 'Its been long',
		},
		{
			image: 'https://avatars.githubusercontent.com/u/24877606',
			name: 'Dr. Joy Buolamwini',
			username: 'jovialjoy',
			date: '2024 Jan 19',
			message: 'How Are You?',
		},
		{
			image: 'https://avatars.githubusercontent.com/u/24877606',
			name: 'Sabrina',
			username: 'stuffsabsays',
			date: '2024 Jan 14',
			message: 'Can We Talk?',
		},
	],
}
