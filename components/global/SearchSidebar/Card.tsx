import Link from "next/link"

import styles from './searchsidebar.module.sass'

interface ICard {
    title: string,
    showMoreUrl?: string,
    new_page: boolean
    children?: React.ReactNode
}



export const Card = ( { title, showMoreUrl, new_page = false, children } : ICard) => {
    return (
        <div className={`${styles.card} ${styles.card}`}>
            <h2>{title}</h2>
            {children}
            {
                showMoreUrl && <Link href={showMoreUrl} target={`${new_page ? '_blank' : ''}`} key={showMoreUrl} className={styles.link}>Show more</Link>
            }
        </div>
    )
}