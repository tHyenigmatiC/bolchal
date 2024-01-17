import { Card } from './Card'
import styles from './searchsidebar.module.sass'


interface ITrending {
	category?: string
	content: string
	other?: string
}

interface ITrendingList {
	data: ITrending[]
}

export const TrendingList = ( {data}: ITrendingList ) => {
    return (
        <Card title={'What\'s happening'} showMoreUrl='https://www.kapilbastola.com.np' new_page={true}>
            <div className={styles.column}>
                {
                    data.map((trendData: ITrending) => (
                        <Trend
                            key={trendData.content}
                            {...trendData}
                        />
                    ))
                }
            </div>
        </Card>
    )
}

const Trend = ( {category, content, other}: ITrending ) => {
    return (
        <div className={styles.column}>
            <p className={styles.subtitle}>{category}</p>
            <p className={styles.title}>{content}</p>
            <p className={styles.subtitle}>{other}</p>
        </div>
    )
}