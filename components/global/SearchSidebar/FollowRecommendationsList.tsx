import Image from 'next/image'

import { Card } from "./Card"
import styles from './searchsidebar.module.sass'

interface IFollowRecommendtations {
	image: string
	name: string
	username: string
}

interface IFollowRecommendtationsList {
	data: IFollowRecommendtations[]
}


export const FollowRecommendationsList = ( {data}: IFollowRecommendtationsList) => {
    return (
        <Card title="Who to follow" new_page={true} showMoreUrl="https://www.kapilbastola.com.np">
            <div className={styles.column}>
                {
                    data.map((followData: IFollowRecommendtations) => (
                        <FollowProfile key={followData.username} {...followData} />
                    ))
                }
            </div>
        </Card>
    )
}

const FollowProfile = ({ image, name, username} : IFollowRecommendtations) => {
    return (
        <div className={styles.row}>
            <div className={styles.row}>
                <Image
                    src={image}
                    alt={'Profile picture of '+name}
                    height={48}
                    width={48}
                    className={styles.circle}
                />
                <div className={styles.column}>
                    <p className={styles.title}>{name}</p>
                    <p className={styles.subtitle}>@{username}</p>
                </div>
            </div>
            <button className={styles.button}>Follow</button>
        </div>
    )
}