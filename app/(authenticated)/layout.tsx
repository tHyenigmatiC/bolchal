import { Sidebar } from '@components'
import { Authenticated, Navigate } from '@packages/core/components'

import styles from './layout.module.sass'
import { SearchSidebar } from '@components/global/SearchSidebar'

export default function HomePageLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Authenticated
			fallbackContent={<Navigate to="/sign-in" replace={true} />}
		>
			<main className={styles.layout}>
				<Sidebar />
				<div className={styles.content}>{children}</div>
			</main>
		</Authenticated>
	)
}
