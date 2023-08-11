/* eslint-disable react/display-name */
import React from 'react'
import styles from './post.module.sass'

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

Post.Header = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.header}>{children}</div>
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

Post.Metrics = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.metrics}>{children}</div>
}
