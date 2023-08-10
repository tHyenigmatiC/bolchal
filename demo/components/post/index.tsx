/* eslint-disable react/display-name */
import React from 'react'
import Image from 'next/image'

import { Post } from './post'

export interface PostProps {
	description: string
	media: string
	likes: number
	comments: number
	share: number
	createdAt: string
	user: string
}

export const FeedPost = (props: PostProps) => {
	const { description, media, likes, comments, share, createdAt, user } =
		props
	return (
		<Post>
			<Post.Header>
				<Image
					src={media}
					width={32}
					height={32}
					alt="Picture of the author"
					style={{
						objectFit: 'contain',
						borderRadius: '50%',
					}}
				/>
				<div>
					<div>{user}</div>
					<span>{createdAt}</span>
				</div>
			</Post.Header>
			<Post.Body>
				<Post.Content>{description}</Post.Content>
				{media ? (
					<Post.Media>
						<Image
							src={media}
							alt="Picture of the author"
							fill={true}
							style={{
								objectFit: 'cover',
							}}
						/>
					</Post.Media>
				) : null}
			</Post.Body>
			<Post.Footer>
				<Post.Metrics>
					<Image
						src="/like.svg"
						height={20}
						width={20}
						alt="Icon for likes"
					/>
					{likes} likes
				</Post.Metrics>
				<Post.Metrics>
					<Image
						src="/comments.svg"
						height={24}
						width={24}
						alt="Icon for comments"
					/>
					{comments} comments
				</Post.Metrics>
				<Post.Metrics>
					<Image
						src="/share.svg"
						height={20}
						width={20}
						alt="Icon for share"
					/>
					{share} shares
				</Post.Metrics>
			</Post.Footer>
		</Post>
	)
}
