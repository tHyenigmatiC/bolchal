import styles from './navigation.module.sass'

export const FeedsCategoryNavigationBar = () => {
    return (
        <div className={styles.row}>
            <a target='_blank' href='https://www.kapilbastola.com.np'>For you</a>
            <a target='_blank' href='https://www.kapilbastola.com.np'>Following</a>
        </div>
    )
}