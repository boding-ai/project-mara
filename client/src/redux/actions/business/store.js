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

    // Get store details
    STORE_DETAILS_LOADING,
    STORE_DETAILS,
    GET_STORE_DETAILS_ALLOW,

    // Add new store
    ADD_NEW_STORE_DETAILS,
} from '../types'

// Reset Success 
export const resetAddNewStoreSuccess = () => async (dispatch, getState) => {
    dispatch({
        type: ADD_NEW_STORE_DETAILS,
        payload: {
            loading: false,
            success: false,
        },
    })
}

// Add New Store
export const addNewStore =
    ({
        storeName,
        storeType,
        storeContactNumber,
        address,
        mainLocation,
        poc,
        storeTimingStart,
        storeTimingEnd,
        storeOperationDays,
        appointmentStartTimings,
        appointmentEndTimings,
        appointmentTimeSpan,
        appointmentTimeDuration,
    }) =>
    async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            storeName,
            storeType,
            storeContactNumber,
            address,
            mainLocation,
            poc,
            storeTimingStart,
            storeTimingEnd,
            storeOperationDays,
            appointmentStartTimings,
            appointmentEndTimings,
            appointmentTimeSpan,
            appointmentTimeDuration,
        })

        try {
            dispatch({
                type: ADD_NEW_STORE_DETAILS,
                payload: {
                    loading: true,
                    success: false,
                },
            })

            const res = await api.post('/business/store/add-new-store', body)

            dispatch({
                type: ADD_NEW_STORE_DETAILS,
                payload: {
                    loading: false,
                    success: true,
                },
            })

            value.message = 'New store added!'
            value.type = 'success'

            dispatch({
                type: SUCCESS_200,
                payload: value,
            })

            dispatch(getStoreDetails())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                3000
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
                    type: ADD_NEW_STORE_DETAILS,
                    payload: {
                        loading: false,
                        success: false,
                    },
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
                    type: ADD_NEW_STORE_DETAILS,
                    payload: {
                        loading: false,
                        success: false,
                    },
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
                    type: ADD_NEW_STORE_DETAILS,
                    payload: {
                        loading: false,
                        success: false,
                    },
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
                    type: ADD_NEW_STORE_DETAILS,
                    payload: {
                        loading: false,
                        success: false,
                    },
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

// Get Store Details
export const getStoreDetails = () => async (dispatch, getState) => {
    const value = {}

    try {
        dispatch({
            type: STORE_DETAILS_LOADING,
            payload: true,
        })

        const res = await api.get('/business/store/get-store-details')

        console.log(res.data)

        dispatch({
            type: STORE_DETAILS,
            payload: res.data
        })

        dispatch({
            type: GET_STORE_DETAILS_ALLOW,
            payload: false
        })

        dispatch({
            type: STORE_DETAILS_LOADING,
            payload: false,
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
                        type: STORE_DETAILS_LOADING,
                        payload: false,
                    })

                            dispatch({
                                type: GET_STORE_DETAILS_ALLOW,
                                payload: true,
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
                        type: STORE_DETAILS_LOADING,
                        payload: false,
                    })

                          dispatch({
                              type: GET_STORE_DETAILS_ALLOW,
                              payload: true,
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
                        type: STORE_DETAILS_LOADING,
                        payload: false,
                    })

                          dispatch({
                              type: GET_STORE_DETAILS_ALLOW,
                              payload: true,
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
                        type: STORE_DETAILS_LOADING,
                        payload: false,
                    })

                          dispatch({
                              type: GET_STORE_DETAILS_ALLOW,
                              payload: true,
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