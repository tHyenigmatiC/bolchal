'use client'

import { Post } from '../../../components/pages/home/Posts/Post'
import { PostProps } from '../../../components/pages/home/Posts/types'

import styles from './page.module.sass'

import { useGetList } from '@packages/core/hooks'
import { useEffect, useState } from 'react'

const Notifications = () => {
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
						setFeeds([])
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


export default Notifications;