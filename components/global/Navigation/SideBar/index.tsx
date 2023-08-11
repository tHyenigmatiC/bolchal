'use client'

import styles from './sidebar.module.sass'
import { useGetIdentity } from '@lib/core/hooks'
import { Sidebar as SidebarContent } from './sidebar'

export const Sidebar = () => {
	const { user } = useGetIdentity()
	return (
		<section className={styles.sidebar}>
			<SidebarContent user={user} />
		</section>
	)
}
