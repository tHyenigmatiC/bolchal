import { SearchInput } from "./SearchInput"
import { Trending } from "./Trending"
import { FollowRecommendations } from "./FollowRecommendations"

import styles from './searchsidebar.module.sass'

export const SearchSidebar = () => {
    return (
        <div className={styles.Main}>
            <SearchInput defaultValue=''/>
            <Trending />
            <FollowRecommendations />
        </div>
    )
}