import styles from './page.module.sass'
import { CreatePost, Feeds } from '@components'

export default function Home() {
	return (
		<main className={styles.main}>
			<CreatePost />
			<Feeds feeds={[]} />
		</main>
	)
}
