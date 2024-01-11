/* eslint-disable react/display-name */
import { Models } from 'appwrite'
import Image from 'next/image'

import styles from './sidebar.module.sass'

import { SidebarConfig } from './config'
import Link from 'next/link'
import { ComplimentaryButton } from '@components/global/Button'

export const Sidebar = ({
	user,
}: {
	user?: Models.User<Models.Preferences>
}) => {
	return (
		<header>
			<Sidebar.Header>
				<Link
					href='/'
					className={styles.brand}
				>
					Bolchal
				</Link>
			</Sidebar.Header>
			<Sidebar.Body>
				{SidebarConfig.links.map((link) => (
					<Link
						href={link.href}
						className={styles.link}
						key={link.href}
					>
						{link.icon ? (
							<Image
								src={link.icon}
								alt="Picture of link"
								height={24}
								width={24}
							/>
						) : null}
						<p>{link.text}</p>
					</Link>
				))}
				<ComplimentaryButton>Post</ComplimentaryButton>
			</Sidebar.Body>
		</header>
	)
}

Sidebar.Header = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.header}>{children}</div>
}

Sidebar.Body = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.body}>{children}</div>
}
