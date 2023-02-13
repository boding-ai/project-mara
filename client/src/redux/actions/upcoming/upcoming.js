import api from '../../../utils/api'

import { logout } from '../auth/auth'

import {
    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,

    // Event List
    CHANGE_UPCOMING_EVENT_PREFIX,
    LOAD_UPCOMING_EVENTS,
} from '../types'


// Load all the upcoming events
export const getUpcomingEvents = (offset) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            offset,
        })

        try {
            dispatch({
                type: LOAD_UPCOMING_EVENTS,
                payload: true
            })

            const res = await api.post('/v1/events/load-upcoming-events', body)

            dispatch({
                type: CHANGE_UPCOMING_EVENT_PREFIX,
                payload: res.data,
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
                    type: LOAD_UPCOMING_EVENTS,
                    payload: false,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            } else if (error.response.status === 401) {
                value.message = 'Session expired. Please login.'
                value.type = 'error'

                dispatch({
                    type: ERROR_401,
                    payload: value,
                })

                dispatch({
                    type: LOAD_UPCOMING_EVENTS,
                    payload: false,
                })

                dispatch(logout())

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            } else if (error.response.status === 400) {
                value.message = error.response.data.errors[0].msg
                value.type = 'error'

                dispatch({
                    type: ERROR_400,
                    payload: value,
                })

                dispatch({
                    type: LOAD_UPCOMING_EVENTS,
                    payload: false,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            } else {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_SOMETHING_ELSE,
                    payload: value,
                })

                dispatch({
                    type: LOAD_UPCOMING_EVENTS,
                    payload: false,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            }
        }
    }

// Change the prefixes of elements
export const changeUpcomingEventPrefix =
    (source, destination, id, oldEventList, updatedEventList) =>
    async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            source,
            destination,
            id,
        })

        try {
            dispatch({
                type: CHANGE_UPCOMING_EVENT_PREFIX,
                payload: updatedEventList,
            })

            await api.post('/v1/events/change-event-prefix', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: CHANGE_UPCOMING_EVENT_PREFIX,
                    payload: oldEventList,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            } else if (error.response.status === 401) {
                value.message = 'Session expired. Please login.'
                value.type = 'error'

                dispatch({
                    type: ERROR_401,
                    payload: value,
                })

                dispatch({
                    type: CHANGE_UPCOMING_EVENT_PREFIX,
                    payload: oldEventList,
                })

                dispatch(logout())

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            } else if (error.response.status === 400) {
                value.message = error.response.data.errors[0].msg
                value.type = 'error'

                dispatch({
                    type: ERROR_400,
                    payload: value,
                })

                dispatch({
                    type: CHANGE_UPCOMING_EVENT_PREFIX,
                    payload: oldEventList,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            } else {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_SOMETHING_ELSE,
                    payload: value,
                })

                dispatch({
                    type: CHANGE_UPCOMING_EVENT_PREFIX,
                    payload: oldEventList,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            }
        }
    }