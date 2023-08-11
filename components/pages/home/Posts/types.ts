export interface PostProps {
	description: string
	media: string
	likes: number
	comments: number
	share: number
	createdAt: string
	user: string
}

export interface FeedsProps {
	feeds: PostProps[] | []
}
