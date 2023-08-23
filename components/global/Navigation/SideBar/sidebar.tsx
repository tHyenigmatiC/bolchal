/* eslint-disable react/display-name */
import { Models } from 'appwrite'
import Image from 'next/image'

import styles from './sidebar.module.sass'

import { SidebarConfig } from './config'
import Link from 'next/link'
import { LogoutButton } from '@components/global/Button'

export const Sidebar = ({
	user,
}: {
	user?: Models.User<Models.Preferences>
}) => {
	return (
		<div className={styles.content}>
			<Sidebar.Header>
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
				<p>{user?.email}</p>
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
								height={20}
								width={20}
							/>
						) : null}
						<p>{link.text}</p>
					</Link>
				))}
			</Sidebar.Body>
			<Sidebar.Footer>
				<LogoutButton className={styles.link}>
					<Image
						src="/logout.svg"
						alt="Picture of link"
						height={20}
						width={20}
					/>
					<p>Logout</p>
				</LogoutButton>
			</Sidebar.Footer>
		</div>
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
