import { Post } from '../Post'
import { FeedsProps } from '../types'

import styles from './list.module.sass'

// temporary

import FeedsMockData from './data.json'

export const Feeds = ({ feeds }: FeedsProps) => {
	if (feeds.length < 1) {
		feeds = FeedsMockData
	}

	return (
		<div className={styles.feeds}>
			{feeds?.map((feed) => <Post key={feed.createdAt} {...feed} />)}
		</div>
	)
}
