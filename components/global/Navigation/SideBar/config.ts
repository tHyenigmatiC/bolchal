export interface SidebarLink {
	href: string
	text: string
	icon?: string
}
export interface SidebarProps {
	links: SidebarLink[]
}

export const SidebarConfig: SidebarProps = {
	links: [
		{
			href: '/',
			text: 'Home',
			icon: '/home.svg',
		},
		{
			href: '/messages',
			text: 'Messages',
			icon: '/message.svg',
		},
		{
			href: '/',
			text: 'Settings',
			icon: '/settings.svg',
		},
	],
}
