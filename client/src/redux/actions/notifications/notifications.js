import api from '../../../utils/api'
import { logout } from '../auth/auth'
import {
    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    SUCCESS_200,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,

    // Notifications
    SET_NOTIFICATIONS,
    NOTIFICATIONS_LOADING,
    NOTIFICATIONS_UNREAD_COUNT,
    NOTIFICATION_STATUS,
    NOTIFICATIONS_COUNT_CHANGE,
} from '../types'

// Set notification status to read
export const setNotificationStatusToFalse =
    (id) =>
    async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            id
        })

        const { notifications } = getState()

        try {

            dispatch({
                type: NOTIFICATION_STATUS,
                payload: {
                    id,
                    status: false
                }
            })

            // dispatch({
            //     type: NOTIFICATIONS_COUNT_CHANGE,
            //     payload: notifications.notificationsCount - 1,
            // })

            const res = await api.post('/notifications/set-notifications-to-false', body)


        } catch (error) {
            if (error.response.status === 400) {
                value.message = 'Not Found'
                value.type = 'error'

                dispatch({
                    type: ERROR_400,
                    payload: value,
                })

                dispatch({
                    type: NOTIFICATION_STATUS,
                    payload: {
                        id,
                        status: true,
                    },
                })

                // dispatch({
                //     type: NOTIFICATIONS_COUNT_CHANGE,
                //     payload: notifications.notificationsCount + 1,
                // })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    5000
                )
            } else if (error.response.status === 401) {
                value.message =
                    "You're unauthorized to perform this task. Please login."
                value.type = 'error'

                dispatch({
                    type: ERROR_401,
                    payload: value,
                })

                dispatch({
                    type: NOTIFICATION_STATUS,
                    payload: {
                        id,
                        status: true,
                    },
                })


                // dispatch({
                //     type: NOTIFICATIONS_COUNT_CHANGE,
                //     payload: notifications.notificationsCount + 1,
                // })

                dispatch(logout())

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    5000
                )
            } else {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: NOTIFICATION_STATUS,
                    payload: {
                        id,
                        status: true,
                    },
                })


                // dispatch({
                //     type: NOTIFICATIONS_COUNT_CHANGE,
                //     payload: notifications.notificationsCount + 1,
                // })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    5000
                )
            }
        }
    }

// Fetch notifications
export const getNotifications =
    (state) =>
    async (dispatch, getState) => {
        const value = {}

        const { notifications } = getState()

        let oldCount = notifications.notifications.length

        try {

            dispatch({
                type: NOTIFICATIONS_LOADING,
                payload: state,
            })

            const res = await api.get('/notifications/get-notifications')

            dispatch({
                type: NOTIFICATIONS_LOADING,
                payload: false
            })

            if(oldCount !== res.data.array.length) {
                dispatch({
                    type: NOTIFICATIONS_UNREAD_COUNT,
                    payload: res.data.count,
                })

                dispatch({
                    type: SET_NOTIFICATIONS,
                    payload: res.data.array,
                })
            }

            console.log('Yo')

        } catch (error) {
            if (error.response.status === 400) {
                value.message = 'Not Found'
                value.type = 'error'

                dispatch({
                    type: ERROR_400,
                    payload: value,
                })

                      dispatch({
                          type: NOTIFICATIONS_LOADING,
                          payload: false,
                      })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    5000
                )
            } else if (error.response.status === 401) {
                value.message =
                    "Session Expired. Please login."
                value.type = 'error'

                dispatch({
                    type: ERROR_401,
                    payload: value,
                })

                      dispatch({
                          type: NOTIFICATIONS_LOADING,
                          payload: false,
                      })

                dispatch(logout())

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    5000
                )
            } else if (error.response.status === 500) {
                value.message =
                    "Server Error"
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                      dispatch({
                          type: NOTIFICATIONS_LOADING,
                          payload: false,
                      })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    5000
                )
            } else {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                      dispatch({
                          type: NOTIFICATIONS_LOADING,
                          payload: false,
                      })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    5000
                )
            }
        }
    }