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
    
} from '../types'

// +91 7972146825

// Send message on whatsapp
export const sendWhatsappMessage =
    (browserName, mobileNumber, message) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            mobileNumber,
            message,
            browserName: browserName.toLowerCase(),
        })

        try {
            const res = await api.post(
                '/communication/send-message-whatsapp',
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
