import Link from "next/link"

import styles from './searchsidebar.module.sass'

interface ICardContainer {
    title: string,
    data: []
    showMoreUrl?: string
}



export const CardContainer = ( { title, data, showMoreUrl } : ICardContainer) => {
    return (
        <div>
            <h3>Title</h3>
            
            {
                showMoreUrl && <Link href={showMoreUrl} key={showMoreUrl} className={styles.link}>Show more</Link>
            }
        </div>
    )
}