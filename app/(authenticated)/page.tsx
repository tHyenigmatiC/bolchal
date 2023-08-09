import Link from 'next/link'
import styles from './page.module.sass'
import { LogoutButton } from '@components'
import { Authenticated } from '@lib/core/components'

export default function Home() {
	return (
		<Authenticated redirectTo="/sign-in">
			<main className={styles.main}>
				<Link href={'/messages'} className={styles.link}>
					Messages
				</Link>
				<LogoutButton>Logout</LogoutButton>
			</main>
		</Authenticated>
	)
}
