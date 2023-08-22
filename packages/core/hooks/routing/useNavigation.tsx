import { useRouter } from 'next/navigation'

export interface NavigationProps {
	to?: string
	replace?: boolean
}

export const useNavigation = () => {
	const router = useRouter()

	const handleNavigation = ({ to, replace }: NavigationProps) => {
		if (replace) {
			router.replace(to as string)
		}
		router.push(to as string)
	}

	return handleNavigation
}
