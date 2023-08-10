'use client'

import styles from './sidebar.module.sass'
import { useGetIdentity } from '@lib/core/hooks'
import { SidebarContent } from './content'

export const Sidebar = () => {
	const { user } = useGetIdentity()
	return (
		<section className={styles.sidebar}>
			<SidebarContent user={user} />
		</section>
	)
}
