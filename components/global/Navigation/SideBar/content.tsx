import { Models } from 'appwrite'
import Image from 'next/image'

export const SidebarContent = ({
	user,
}: {
	user?: Models.User<Models.Preferences>
}) => {
	console.log(user)
	return (
		<div>
			<Image
				src={'https://avatars.githubusercontent.com/u/24877606'}
				alt="Picture of user"
				height={32}
				width={32}
				style={{
					objectFit: 'contain',
				}}
			/>
		</div>
	)
}
