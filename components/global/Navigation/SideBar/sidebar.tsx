/* eslint-disable react/display-name */
import { Models } from 'appwrite'
import Image from 'next/image'

import styles from './sidebar.module.sass'

import { SidebarConfig } from './config'
import Link from 'next/link'
import { ComplimentaryButton } from '@components/global/Button'
import { SidebarLink } from './link'

export const Sidebar = ({
	user,
}: {
	user?: Models.User<Models.Preferences>
}) => {
	return (
		<header role='banner' className={styles.nostyles}>
			<div className={` ${styles.nostyles} ${styles.container}`}>
				<div className={`${styles.nostyles} ${styles.sidebarcontent}`}>
					<div className={`${styles.nostyles} ${styles.navigation}`}>
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
								<SidebarLink link={link} key={link.href}/>
							))}
							<ComplimentaryButton>Post</ComplimentaryButton>
						</Sidebar.Body>
					</div>
					<Sidebar.Footer>
						<Image
								src={'https://avatars.githubusercontent.com/u/24877606'}
								alt="Picture of user"
								height={48}
								width={48}
								style={{
									objectFit: 'contain',
									borderRadius: '50%',
								}}
							/>
							<div className={styles.column}>
								<p>{user?.name}</p>
								<p>@{user?.name}</p>
							</div>
							<Image
								src='/dots.svg'
								alt="More Account Options"
								height={20}
								width={20}
							/>
					</Sidebar.Footer>
				</div>				
			</div>
		</header>
	)
}

Sidebar.Header = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.header}>{children}</div>
}

Sidebar.Body = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.body}>{children}</div>
}


Sidebar.Footer = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.footer}>{children}</div>
}
