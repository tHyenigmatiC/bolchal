import Link from 'next/link'
import styles from './page.module.sass'
import { LogoutButton } from '@components'

export default function Home() {
	return (
		<main className={styles.main}>
			<Link href={'/messages'} className={styles.link}>
				Messages
			</Link>
			<LogoutButton>Logout</LogoutButton>
		</main>
	)
}
