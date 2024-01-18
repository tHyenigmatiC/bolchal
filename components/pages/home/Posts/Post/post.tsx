/* eslint-disable react/display-name */
import React from 'react'
import styles from './post.module.sass'
import { Metrics } from './metrics'

export interface PostProps {
	description: string
	media: string
	likes: number
	comments: number
	share: number
	createdAt: string
	user: string
}

export const Post = ({ children }: { children: React.ReactNode }) => {
	return <article className={styles.post}>{children}</article>
}

Post.Row = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.row}>{children}</div>
}

Post.Container = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.container}>{children}</div>
}


Post.Info = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.info}>{children}</div>
}

Post.Body = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.body}>{children}</div>
}

Post.Content = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.content}>{children}</div>
}

Post.Media = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.media}>{children}</div>
}

Post.Footer = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.footer}>{children}</div>
}

Post.Metrics = Metrics
