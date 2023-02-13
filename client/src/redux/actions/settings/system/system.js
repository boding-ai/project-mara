import api from '../../../../utils/api'

import { logout } from '../../auth/auth'

import {
    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,

    // Change sidebar Lock
    HOVER_INIT,
} from '../../types'

import {
    // Change System notifications
    SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,

    // Change All notifications
    SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,

    // Change clients list type
    SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
} from '../settings-types'


// @route    POST api/v1/settings/system-details/change/clients-list-type
// @desc     Change clients list type settings
// @params   Clients list type
export const changeClientsListTypeSettings =
    (listTypeOld, listTypeNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            listType: listTypeNew,
        })

        try {
            dispatch({
                type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                payload: listTypeNew,
            })

            await api.post(
                '/settings/system-details/change/clients-list-type',
                body
            )
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                    payload: listTypeOld,
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
                    type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                    payload: listTypeOld,
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
                    type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                    payload: listTypeOld,
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
                    type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                    payload: listTypeOld,
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


// @route    POST api/v1/settings/system-details/change/all-notifications
// @desc     Change all notifications settings
// @params   All notifications
export const changeAllNotificationsSettings =
    (allNotifs, allNotifsNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            allNotifs: allNotifsNew,
        })

        try {
            dispatch({
                type: SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,
                payload: allNotifsNew,
            })

            await api.post(
                '/settings/system-details/change/all-notifications',
                body
            )
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,
                    payload: allNotifs,
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
                    type: SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,
                    payload: allNotifs,
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
                    type: SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,
                    payload: allNotifs,
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
                    type: SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,
                    payload: allNotifs,
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

// @route    POST api/v1/settings/system-details/change/platform-notifications
// @desc     Change platform notifications settings
// @params   platform-notifications
export const changeSystemNotificationsSettings =
    (sysNotifs, sysNotifsNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            sysNotifs: sysNotifsNew,
        })

        try {
            dispatch({
                type: SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,
                payload: sysNotifsNew,
            })

            await api.post(
                '/settings/system-details/change/platform-notifications',
                body
            )
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,
                    payload: sysNotifs,
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
                    type: SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,
                    payload: sysNotifs,
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
                    type: SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,
                    payload: sysNotifs,
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
                    type: SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,
                    payload: sysNotifs,
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

// @route    POST api/v1/settings/system-details/change/sidebar-lock
// @desc     Change system sidebar lock settings
// @params   sidebar-lock
export const changeSidebarLockSettings =
    (lock, lockNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            lock: lockNew,
        })

        try {
            dispatch({
                type: HOVER_INIT,
                payload: lockNew,
            })

            await api.post('/settings/system-details/change/sidebar-lock', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: HOVER_INIT,
                    payload: lock,
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
                    type: HOVER_INIT,
                    payload: lock,
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
                    type: HOVER_INIT,
                    payload: lock,
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
                    type: HOVER_INIT,
                    payload: lock,
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
