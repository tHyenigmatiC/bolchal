import { RealtimeWrapper } from '@components'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <RealtimeWrapper>{children}</RealtimeWrapper>
}
