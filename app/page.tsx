import styles from './page.module.sass'

import { FeedPost } from '../demo/components/post'
import PostData from '../demo/components/post/data.json'

export default function Home() {
	return (
		<main className={styles.main}>
			<FeedPost {...PostData[0]} />
			<FeedPost {...PostData[0]} />
		</main>
	)
}
