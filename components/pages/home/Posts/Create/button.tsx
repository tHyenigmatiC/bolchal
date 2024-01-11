import React from 'react'
import styles from './create.module.sass'
import { ComplimentaryButton } from '@components/global'

// eslint-disable-next-line react/display-name
export const SubmitButton = React.memo(() => {
	return (
		<div className={styles.actions}>
			<ComplimentaryButton type="submit">Post</ComplimentaryButton>
		</div>
	)
})
