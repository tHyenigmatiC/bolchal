/* eslint-disable react/display-name */
import React from 'react'
import Image from 'next/image'

import { Post as PostUI } from './post'
import { Metrics, PostProps } from '../types'


export const Post = (props: PostProps) => {
	const { description, media, likes, comments, share, createdAt, user } =
		props
	return (
		<PostUI>
			<PostUI.Row>
				<Image
					src={media}
					width={48}
					height={48}
					alt="Picture of the author"
					style={{
						objectFit: 'contain',
						borderRadius: '50%',
					}}
				/>
				<PostUI.Container>
					<PostUI.Info>
						<p>{user}</p>
						<span>@KapilBastola</span>
						<p>·</p>
						<span>{createdAt}</span>
					</PostUI.Info>
					<PostUI.Body>
						<PostUI.Content>{description}</PostUI.Content>
						{media ? (
							<PostUI.Media>
								<Image
									src={media}
									alt="Picture of the author"
									fill={true}
									style={{
										objectFit: 'cover',
									}}
								/>
							</PostUI.Media>
						) : null}
					</PostUI.Body>
					<PostUI.Footer>
						<PostUI.Metrics type={Metrics.LIKES}>
							<Image
								src="/like.svg"
								height={20}
								width={20}
								alt="Icon for likes"
							/>
							<p>{likes} likes</p>
						</PostUI.Metrics>
						<PostUI.Metrics type={Metrics.COMMENTS}>
							<Image
								src="/comments.svg"
								height={24}
								width={24}
								alt="Icon for comments"
							/>
							{comments} comments
						</PostUI.Metrics>
						<PostUI.Metrics type={Metrics.SHARE}>
							<Image
								src="/share.svg"
								height={20}
								width={20}
								alt="Icon for share"
							/>
							{share} shares
						</PostUI.Metrics>
					</PostUI.Footer>
				</PostUI.Container>
			</PostUI.Row>
		</PostUI>
	)
}
