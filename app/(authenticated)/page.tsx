import styles from './page.module.sass'
import { Feeds } from '@components'

export default function Home() {
	return (
		<main className={styles.main}>
			<Feeds feeds={[]} />
		</main>
	)
}
