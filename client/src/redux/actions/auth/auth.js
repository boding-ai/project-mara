import api from '../../../utils/api'
import { getNotifications } from '../notifications/notifications'

import {
    // Registration
    REGISTER_LOADING,

    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    MAIN_LOADING,

    ERROR_400,
    ERROR_401,
    ERROR_500,
    SUCCESS_200,
    SNACKBAR_RESET,

    LOGIN_LOADING,
    LOGIN_LOADING_COMPLETE,
    LOGIN_LOADING_ERROR,
    LOGIN_LOADING_ERROR_RESOLVED,

    // Sidebar Hover
    HOVER_INIT,
} from '../types'

import {
    // System Notifications
    SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,

    // All notifications
    SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,
    
    SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
} from '../../actions/settings/settings-types'


// Load User
export const loadUser = () => async (dispatch) => {

    let value = {}

        try {
            dispatch({
                type: MAIN_LOADING,
                payload: true
            })

            const res = await api.get('/users/get-data')

            let data = {
                id: res.data.id,
                email: res.data.email,
                name: res.data.name,
                mobileNo: res.data.mobileNo,
                dateOfBirth: res.data.dateOfBirth,

                address: res.data.address,
                city: res.data.city,
                state: res.data.state,
                country: res.data.country,
                pinCode: res.data.pinCode,

                sidebarLock: res.data.sidebarLock,
                systemNotifications: res.data.systemNotifications,
                allNotifications: res.data.allNotifications,

                apiKey: res.data.apiKey,
                businessName: res.data.businessName,
                businessEmailId: res.data.businessEmailId,
                businessAddress: res.data.businessAddress,
                businessContactNo: res.data.businessContactNo,
                businessProfilePic: res.data.businessProfilePic,

                isNew: res.data.isNew,
            }

            dispatch(getNotifications(true))

            dispatch({
                type: USER_LOADED,
                payload: data,
            })

            dispatch({
                type: HOVER_INIT,
                payload: res.data.sidebarLock,
            })

            dispatch({
                type: SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,
                payload: res.data.systemNotifications,
            })

            dispatch({
                type: SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,
                payload: res.data.allNotifications,
            })

            // ! Delete everything related to this
            dispatch({
                type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                payload: true,
                // payload: res.data.clientsListPreference,
            })

            dispatch({
                type: MAIN_LOADING,
                payload: false
            })
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
            })

            dispatch({
                type: MAIN_LOADING,
                payload: false,
            })
        }
}

// Login User and dispatch loaduser
export const login = () =>
  async (dispatch) => {
    const value = {}

    try {

        dispatch({
            type: LOGIN_LOADING,
        })

        const res = await api.get('/users/google/login')

        dispatch({
            type: LOGIN_LOADING_COMPLETE,
        })

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })

        dispatch(loadUser())

    } catch (error) {

        if(error.response.status === 500){

            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: REGISTER_LOADING,
                payload: false,
            })

            dispatch({
                type: LOGIN_LOADING_COMPLETE,
            })

            dispatch({
                type: LOGIN_FAIL,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                3000
            )
        } else if(error.response.status === 401){
            value.message = 'Invalid login credentials.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: REGISTER_LOADING,
                payload: false,
            })

            dispatch({
                type: LOGIN_LOADING_COMPLETE,
            })

            dispatch({
                type: LOGIN_FAIL,
            })

            dispatch({
                type: LOGIN_LOADING_ERROR,
            })

            setTimeout(() => 
                dispatch({
                    type: SNACKBAR_RESET
                }),
            3000)

            setTimeout(
                () =>
                    dispatch({
                        type: LOGIN_LOADING_ERROR_RESOLVED,
                    }),
                3000
            )
        } else if (error.response.status === 400) {
            value.message = 'Please enter an email.'
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: REGISTER_LOADING,
                payload: false,
            })

            dispatch({
                type: LOGIN_LOADING_COMPLETE,
            })

            dispatch({
                type: LOGIN_FAIL,
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
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: REGISTER_LOADING,
                payload: false,
            })

            dispatch({
                type: LOGIN_LOADING_COMPLETE,
            })

            dispatch({
                type: LOGIN_FAIL,
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

// Logout
export const logout = () => async (dispatch) => {

    let value = {}

  try {
      dispatch({
          type: MAIN_LOADING,
          payload: true
      })

    await api.get('/users/logout')

          dispatch({
              type: MAIN_LOADING,
              payload: false,
          })

    dispatch({
      type: LOGOUT
    })

  } catch (error) {
    value.message = 'Oops! Something went wrong. Please reload.'
    value.type = 'error'

    dispatch({
        type: MAIN_LOADING,
        payload: false,
    })

    dispatch({
        type: ERROR_500,
        payload: value,
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