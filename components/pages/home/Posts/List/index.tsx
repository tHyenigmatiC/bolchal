'use client'

import { Post } from '../Post'
import { FeedsProps, PostProps } from '../types'

import styles from './list.module.sass'

// temporary

import FeedsMockData from './data.json'

import { useGetList } from '@packages/core/hooks'
import { useEffect, useState } from 'react'
import { BaseRecord } from '@packages/core/interfaces'

export const Feeds = () => {


	const [feeds, setFeeds] = useState<PostProps[]>()

	const { loadData } = useGetList({
		resource: 'posts',
		sort: [
			{
				field: '$createdAt',
				order: 'desc',
			},
		],
	})

	useEffect(() => {

		let mounted = true;

		if(mounted){
			loadData({
				resource: process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID as string,
				sort: [
					{
						field: '$createdAt',
						order: 'desc',
					},
				],
			}).then(
				(response) => {

					if(response?.total){
						setFeeds(response?.data as unknown as PostProps[])
					}else{
						setFeeds(FeedsMockData as unknown as PostProps[])
					}
				},
				(error) => {
					console.log(error)
				}
			)
		}


		return () => {
			mounted = false
		}
	}, [])


	return (
		<div className={styles.feeds}>
			{feeds?.map((feed : PostProps) => <Post key={feed.id} {...feed} />)}
		</div>
	)
}
