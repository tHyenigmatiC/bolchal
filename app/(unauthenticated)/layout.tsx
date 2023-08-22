// import { Authenticated, RedirectIfAuth } from '@lib/core/components'

import { Authenticated, Navigate } from '@packages/core/components'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Authenticated fallbackContent={children}>
			<Navigate to="/" replace={true} />
		</Authenticated>
	)
}
