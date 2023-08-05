import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { BolchalApp } from '@components/App/App'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Bolchal',
	description: 'Nepali Social Media Platform',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<BolchalApp>{children}</BolchalApp>
			</body>
		</html>
	)
}
