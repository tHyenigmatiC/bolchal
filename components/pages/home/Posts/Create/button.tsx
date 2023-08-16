import React from 'react'
import styles from './create.module.sass'
import { ComplimentaryButton } from '@components'

// eslint-disable-next-line react/display-name
export const SubitButton = React.memo(() => {
	return (
		<div className={styles.actions}>
			<ComplimentaryButton type="submit">Post</ComplimentaryButton>
		</div>
	)
})
