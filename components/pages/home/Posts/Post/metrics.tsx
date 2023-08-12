'use client'

import {
	MouseEventHandler,
	Children,
	isValidElement,
	cloneElement,
	ReactElement,
	useState,
} from 'react'
import { Metrics as TMetrics } from '../types'

import styles from './post.module.sass'

export const Metrics = ({
	type,
	children,
}: {
	type: TMetrics
	children: React.ReactNode
}) => {
	const [isClicked, setIsClicked] = useState<boolean>(false)

	const handleOnClick: MouseEventHandler<HTMLDivElement> = () => {
		setIsClicked(!isClicked)
	}

	return (
		<div className={styles.metrics} onClick={handleOnClick}>
			{Children.map(children, (child) => {
				if (isValidElement(child) && child.props.src) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					return cloneElement(child as ReactElement<any>, {
						...child.props,
						src:
							type == TMetrics.LIKES
								? isClicked
									? '/liked.svg'
									: '/like.svg'
								: child.props.src,
					})
				}

				return child
			})}
		</div>
	)
}
