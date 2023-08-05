import Link from 'next/link'
import styles from './page.module.sass'

export default function Home() {
	return (
		<main className={styles.main}>
			<Link href={'/messages'} className={styles.link}>
				Messages
			</Link>
		</main>
	)
}
