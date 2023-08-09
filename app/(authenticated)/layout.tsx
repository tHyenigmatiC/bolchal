import { Authenticated, Navigate } from '@lib/core/components'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Authenticated
			fallbackContent={<Navigate to="/sign-in" replace={true} />}
		>
			{children}
		</Authenticated>
	)
}
