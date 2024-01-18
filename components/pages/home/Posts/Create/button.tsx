import React from 'react'
import styles from './create.module.sass'
import { ComplimentaryButton } from '@components/global'


interface IButtonProps {
	disabled: boolean
}

// eslint-disable-next-line react/display-name
export const SubmitButton = React.memo(( props: IButtonProps ) => {
	return (
		<div className={styles.actions}>
			<ComplimentaryButton {...props} type="submit">Post</ComplimentaryButton>
		</div>
	)
})
