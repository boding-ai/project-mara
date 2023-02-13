import api from '../../../utils/api'

import { logout } from '../auth/auth'

import axios from 'axios'

import {
    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    SUCCESS_200,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,

    // Check if insta is connected
    CHECK_INSTA_CONNECTED_LOADING,
    CHECK_INSTA_CONNECTED_LOADING_COMPLETE,
    CHECK_INSTA_CONNECTED_RESET,

    // Get Posts from Insta
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
} from '../types'

// -------------------------- GET POSTS -------------------------------
// checkWebsite
export const checkWebsite = (domain) => async (dispatch, getState) => {
    const value = {}

    const body = JSON.stringify({
        domain,
    })

    try {
        dispatch({
            type: CHECK_WEBSITE_LOADING,
            payload: true
        })

        console.log(domain, 'DOMAIN')

        const res = await api.post('/social/check-website-status', body)

           dispatch({
               type: CHECK_WEBSITE_LOADING,
               payload: false,
           })

           dispatch({
               type: CHECK_WEBSITE,
               payload: true
           })

    } catch (error) {
        if (error.response.status === 500) {

            dispatch({
                type: CHECK_WEBSITE_LOADING,
                payload: false,
            })

            dispatch({
                type: CHECK_WEBSITE,
                payload: false,
            })

        } else if (error.response.status === 401) {

            dispatch({
                type: CHECK_WEBSITE_LOADING,
                payload: false,
            })

            dispatch({
                type: CHECK_WEBSITE,
                payload: false,
            })

            dispatch(logout())

        } else if (error.response.status === 400) {

            dispatch({
                type: CHECK_WEBSITE_LOADING,
                payload: false,
            })

            dispatch({
                type: CHECK_WEBSITE,
                payload: false,
            })

        } else {

            dispatch({
                type: CHECK_WEBSITE_LOADING,
                payload: false,
            })

            dispatch({
                type: CHECK_WEBSITE,
                payload: false,
            })

        }
    }
}

// Update Caption of Instagram Post
export const updatePostCaption = (caption, id, newCaption) => async (dispatch, getState) => {
    const value = {}

    const body = JSON.stringify({
        postID: id,
        caption: newCaption,
    })

    try {
        dispatch({
            type: EDIT_POST_CAPTION,
            payload: {
                id,
                caption: newCaption
            },
        })

        const res = await api.post('/social/edit-post-caption', body)

    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
            type: RESET_POST_CAPTION,
            payload: {
                id,
                caption
            },
        })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 401) {
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: RESET_POST_CAPTION,
                payload: {
                    id,
                    caption,
                },
            })

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
            type: RESET_POST_CAPTION,
            payload: {
                id,
                caption
            },
        })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
            type: RESET_POST_CAPTION,
            payload: {
                id,
                caption
            },
        })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        }
    }
}

export const makePostLive = (id) => async (dispatch, getState) => {
    const value = {}

    const body = JSON.stringify({
        postID: id
    })

    try {
        dispatch({
            type: MAKE_POST_LIVE,
            payload: id
        })

        const res = await api.post('/social/make-post-live', body)

    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: MAKE_POST_UNLIVE,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 401) {
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch(logout())

            dispatch({
                type: MAKE_POST_UNLIVE,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                2000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: MAKE_POST_UNLIVE,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: MAKE_POST_UNLIVE,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        }
    }
}

export const makePostUnLive = (id) => async (dispatch, getState) => {
    const value = {}

    const body = JSON.stringify({
        postID: id
    })

    try {
        dispatch({
            type: MAKE_POST_UNLIVE,
            payload: id,
        })

        const res = await api.post('/social/make-post-not-live', body)

    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: MAKE_POST_LIVE,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 401) {
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: MAKE_POST_LIVE,
                payload: id,
            })

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                2000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: MAKE_POST_LIVE,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: MAKE_POST_LIVE,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        }
    }
}

// Show nsfw warning
export const enableNsfwWarning = (id) => async (dispatch, getState) => {
    const value = {}

    const body = JSON.stringify({
        postID: id,
    })

    try {
        dispatch({
            type: ENABLE_POST_NSFW_WARNING,
            payload: id,
        })

        const res = await api.post('/social/enable-post-nsfw-warning', body)
    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: DISABLE_POST_NSFW_WARNING,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 401) {
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: DISABLE_POST_NSFW_WARNING,
                payload: id,
            })

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                2000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: DISABLE_POST_NSFW_WARNING,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: DISABLE_POST_NSFW_WARNING,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        }
    }
}

// Disable nsfw warning
export const disableNsfwWarning = (id) => async (dispatch, getState) => {
    const value = {}

    const body = JSON.stringify({
        postID: id,
    })

    try {
        dispatch({
            type: DISABLE_POST_NSFW_WARNING,
            payload: id,
        })

        const res = await api.post('/social/disable-post-nsfw-warning', body)
    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: ENABLE_POST_NSFW_WARNING,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 401) {
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: ENABLE_POST_NSFW_WARNING,
                payload: id,
            })

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                2000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: ENABLE_POST_NSFW_WARNING,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: ENABLE_POST_NSFW_WARNING,
                payload: id,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        }
    }
}

// -------------------------- GET POSTS -------------------------------
export const getInstaPostsFromDb = () => async (dispatch, getState) => {
    const value = {}

    try {
        dispatch({
            type: GET_POSTS_FROM_INSTA_TWO_LOADING,
        })

        const res = await api.get('/social/get-insta-posts-from-db')

        dispatch({
            type: GET_POSTS_FROM_INSTA_LOADING_TWO_COMPLETE,
            payload: res.data
        })

    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: GET_POSTS_FROM_INSTA_CONNECTED_TWO_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 401) {
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: GET_POSTS_FROM_INSTA_CONNECTED_TWO_RESET,
            })

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                2000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: GET_POSTS_FROM_INSTA_CONNECTED_TWO_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: GET_POSTS_FROM_INSTA_CONNECTED_TWO_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        }
    }
}

export const getPostsFromInstagramPartOne = () => async (dispatch, getState) => {
    const value = {}

    const { social } = getState()

    const body = JSON.stringify({
        accessToken: social.refreshToken,
    })
    

    try {
        dispatch({
            type: GET_POSTS_FROM_INSTA_LOADING,
        })

        const res = await api.post('/social/save-posts-from-instagram', body)

        dispatch(getInstaPostsFromDb())

        dispatch({
            type: GET_POSTS_FROM_INSTA_LOADING_COMPLETE,
        })

    } catch (error) {
        console.log(error)
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: GET_POSTS_FROM_INSTA_CONNECTED_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 401) {
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: GET_POSTS_FROM_INSTA_CONNECTED_RESET,
            })

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                2000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: GET_POSTS_FROM_INSTA_CONNECTED_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: GET_POSTS_FROM_INSTA_CONNECTED_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        }
    }
}


// -------------------- CHECK IF INSTA CONNECTED -------------------------
export const checkInstaConnected = () => async (dispatch) => {
    const value = {}

    try {
        dispatch({
            type: CHECK_INSTA_CONNECTED_LOADING,
        })

        const res = await api.get('/social/check-if-insta-connected')

        dispatch({
            type: CHECK_INSTA_CONNECTED_LOADING_COMPLETE,
            payload: res.data
        })

    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: CHECK_INSTA_CONNECTED_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else if (error.response.status === 401) {
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: CHECK_INSTA_CONNECTED_RESET,
            })

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                2000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: CHECK_INSTA_CONNECTED_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: CHECK_INSTA_CONNECTED_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                4000
            )
        }
    }
}
