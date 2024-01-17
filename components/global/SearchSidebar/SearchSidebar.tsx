import { SearchInput } from "./SearchInput"
import { TrendingList } from "./TrendingList"
import { FollowRecommendationsList } from "./FollowRecommendationsList"

import styles from './searchsidebar.module.sass'

import { MockTrending, MockFollowRecommendations } from "./mock"

export const SearchSidebar = () => {
    return (
        <div className={styles.Main}>
            <SearchInput defaultValue=''/>
            <TrendingList {...MockTrending}/>
            <FollowRecommendationsList {...MockFollowRecommendations}/>
        </div>
    )
}