export interface PostProps {
	description: string
	media: string
	likes: number
	comments: number
	share: number
	$createdAt: string
	user: string
	id: string
}

export type FeedsProps = {
	feeds: PostProps[]
}

export enum Metrics {
	LIKES = 'likes',
	COMMENTS = 'comments',
	SHARE = 'share',
}
