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
			href: '/explore',
			text: 'Explore',
			icon: '/explore.svg',
		},
		{
			href: '/notifications',
			text: 'Notifications',
			icon: '/bell.svg',
		},
		{
			href: '/messages',
			text: 'Messages',
			icon: '/message.svg',
		},
		{
			href: '/grok',
			text: 'Grok',
			icon: '/grok.svg',
		},
		{
			href: '/lists',
			text: 'Lists',
			icon: '/lists.svg',
		},
		{
			href: '/profile',
			text: 'Profile',
			icon: '/profile.svg',
		},
		{
			href: '/more',
			text: 'More',
			icon: '/more.svg',
		},
	],
}
