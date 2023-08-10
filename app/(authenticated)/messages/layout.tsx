import { RealtimeWrapper } from '@components'

export default function MessagesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <RealtimeWrapper>{children}</RealtimeWrapper>
}
