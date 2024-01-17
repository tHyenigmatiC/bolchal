import { SearchSidebar } from '@components/global/SearchSidebar'
import styles from './page.module.sass'
import { CreatePost, Feeds } from '@components/pages'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.left}>
				<CreatePost />
				<Feeds feeds={[]} />
			</div>
			<div className={styles.right}>
				<SearchSidebar />
			</div>
		</main>
	)
}
