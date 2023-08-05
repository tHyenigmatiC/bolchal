import { RealtimeWrapper } from '@components/App/Realtime'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <RealtimeWrapper>{children}</RealtimeWrapper>
}
