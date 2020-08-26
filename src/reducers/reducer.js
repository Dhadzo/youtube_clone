const INTITIAL_STATE = {
            searchResult: [],
            popularVideos: [],
            recentlyWatched:[],
            trendingVideos: [],
            currentUser: null,
            subscriptions: [],
            subscriptionsVideos:[],
            notifications:[]
}


const addRecentVideo = (video, videoList) => {
    return [...videoList, {...video}]
}

export const reducer = (state = INTITIAL_STATE, action) => {

    switch(action.type){
        case 'add_subscriptions':
            return {
                ...state,
                subscriptions: action.payload
            }
        case 'add_subscriptionsVideos':
            return {
                ...state,
                subscriptionsVideos: action.payload
            }
        case 'add_notifications':
            return {
                ...state,
                notifications: action.payload
            }
        case 'add_search_result': 
            return {
                  ...state,
                   searchResult: action.payload
            }
        case 'add_home_videos':
            return {
                ...state,
                homeVideos: action.payload
            }
        case 'add_recently_watched':
            return {
                ...state,
                recentlyWatched: addRecentVideo(action.payload,state.recentlyWatched)
            }
        case 'add_trending_videos':
            return {
                ...state,
                trendingVideos: action.payload
            }
        case 'sign_in_success':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'sign_out_success':
            return {
                ...state,
                currentUser: null
            }    
        default:
            return state      
    }

}