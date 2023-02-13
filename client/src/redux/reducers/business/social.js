import {
    // Add New Owner
    CHECK_INSTA_CONNECTED_LOADING,
    CHECK_INSTA_CONNECTED_LOADING_COMPLETE,
    CHECK_INSTA_CONNECTED_RESET,

    // Get Posts from Insta - Part 1
    GET_POSTS_FROM_INSTA_LOADING,
    GET_POSTS_FROM_INSTA_LOADING_COMPLETE,
    GET_POSTS_FROM_INSTA_CONNECTED_RESET,

    // Get Posts from Insta - Part 2
    GET_POSTS_FROM_INSTA_TWO_LOADING,
    GET_POSTS_FROM_INSTA_LOADING_TWO_COMPLETE,
    GET_POSTS_FROM_INSTA_CONNECTED_TWO_RESET,

    // Live/Unlive post
    MAKE_POST_LIVE,
    MAKE_POST_UNLIVE,

    // Edit caption
    EDIT_POST_CAPTION,
    RESET_POST_CAPTION,

    // Nsfw Warning
    ENABLE_POST_NSFW_WARNING,
    DISABLE_POST_NSFW_WARNING,

    // Check website
    CHECK_WEBSITE,
    CHECK_WEBSITE_LOADING,
} from '../../actions/types'

const initialState = {

    // Check if insta is connected
    checkInstaConnectedLoading: false,
    instaID: 0,
    refreshToken: "",

    // Get posts from Instagram 
    getPostsFromInstaOne: false,

    getPostsFromInstaTwo: false,
    instaPosts: [],

    websiteLive: false,
    websiteLiveLoading: false
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // Check website
        case CHECK_WEBSITE:
            return {
                ...state,
                websiteLive: payload,
            }

        case CHECK_WEBSITE_LOADING:
            return {
                ...state,
                websiteLiveLoading: payload,
            }
            
        // Edit post caption
        case EDIT_POST_CAPTION:
        case RESET_POST_CAPTION:
            return {
                ...state,
                instaPosts: state.instaPosts.map((element, index) =>
                    element.post_id === payload.id
                        ? {
                              ...element,
                              caption: payload.caption,
                          }
                        : element
                ),
            }

        // Live/Unlive post
        case MAKE_POST_LIVE:
            return {
                ...state,
                instaPosts: state.instaPosts.map((element, index) =>
                    element.post_id === payload
                        ? {
                              ...element,
                              show: true,
                          }
                        : element
                ),
            }

        case MAKE_POST_UNLIVE:
            return {
                ...state,
                instaPosts: state.instaPosts.map((element, index) =>
                    element.post_id === payload
                        ? {
                              ...element,
                              show: false,
                          }
                        : element
                ),
            }

        // NSFW Warning
        case ENABLE_POST_NSFW_WARNING:
            return {
                ...state,
                instaPosts: state.instaPosts.map((element, index) =>
                    element.post_id === payload
                        ? {
                              ...element,
                              nsfw_warning: true,
                          }
                        : element
                ),
            }

        case DISABLE_POST_NSFW_WARNING:
            return {
                ...state,
                instaPosts: state.instaPosts.map((element, index) =>
                    element.post_id === payload
                        ? {
                              ...element,
                              nsfw_warning: false,
                          }
                        : element
                ),
            }
        // Get posts from Insta - Part Two
        case GET_POSTS_FROM_INSTA_TWO_LOADING:
            return {
                ...state,
                getPostsFromInstaTwo: true,
            }
        case GET_POSTS_FROM_INSTA_LOADING_TWO_COMPLETE:
            return {
                ...state,
                getPostsFromInstaTwo: false,
                instaPosts: payload,
            }
        case GET_POSTS_FROM_INSTA_CONNECTED_TWO_RESET:
            return {
                ...state,
                getPostsFromInstaTwo: false,
                instaPosts: [],
            }

        case GET_POSTS_FROM_INSTA_LOADING:
            return {
                ...state,
                getPostsFromInstaOne: true,
            }
        case GET_POSTS_FROM_INSTA_LOADING_COMPLETE:
            return {
                ...state,
                getPostsFromInstaOne: false,
            }
        case GET_POSTS_FROM_INSTA_CONNECTED_RESET:
            return {
                ...state,
                getPostsFromInstaOne: false,
            }

        // Check if insta is added
        case CHECK_INSTA_CONNECTED_LOADING:
            return {
                ...state,
                checkInstaConnectedLoading: true,
            }
        case CHECK_INSTA_CONNECTED_LOADING_COMPLETE:
            return {
                ...state,
                checkInstaConnectedLoading: false,
                instaID: payload.insta_id,
                refreshToken: payload.token,
            }
        case CHECK_INSTA_CONNECTED_RESET:
            return {
                ...state,
                checkInstaConnectedLoading: false,
                instaID: 0,
                refreshToken: '',
            }

        default:
            return state
    }
}

export default authReducer
