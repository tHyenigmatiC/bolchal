import { SearchSidebar } from '@components/global/SearchSidebar'
import styles from './page.module.sass'
import { CreatePost, Feeds, FeedsCategoryNavigationBar } from '@components/pages'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.left}>
				<FeedsCategoryNavigationBar />
				<CreatePost />
				<Feeds/>
			</div>
			<div className={styles.right}>
				<SearchSidebar />
			</div>
		</main>
	)
}
