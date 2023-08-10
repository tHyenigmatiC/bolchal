import React from 'react'

export interface SidebarProps {
	href: string
	text: string
	icon?: React.ReactNode
}

export const SidebarConfig: SidebarProps[] = [
	{
		href: '/',
		text: 'Home',
		icon: '/home.svg',
	},
	{
		href: '/',
		text: 'Messages',
		icon: '/messages.svg',
	},
	{
		href: '/',
		text: 'Settings',
		icon: '/settings.svg',
	},
]
