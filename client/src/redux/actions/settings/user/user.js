import api from '../../../../utils/api'

import { logout } from '../../auth/auth'

import {
    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,
} from '../../types'

import {
    // Change name
    SETTINGS_USER_CHANGE_NAME,

    // Change email
    SETTINGS_USER_CHANGE_EMAIL,

    // Change city
    SETTINGS_USER_CHANGE_CITY,

    // Change state
    SETTINGS_USER_CHANGE_STATE,

    // Change Country
    SETTINGS_USER_CHANGE_COUNTRY,

    // Change Pincode
    SETTINGS_USER_CHANGE_PINCODE,

    // Change Mobile Number
    SETTINGS_USER_CHANGE_MOBILE_NUMBER,

    // Change Date of Birth
    SETTINGS_USER_CHANGE_DATE_OF_BIRTH,

    // Change Address
    SETTINGS_USER_CHANGE_ADDRESS,

} from '../settings-types'


// @route    POST api/v1/settings/user-details/change/date-of-birth
// @desc     Change user's date-of-birth
// @params   date-of-birth
export const changeDobSettings =
    (dateOfBirth, dateOfBirthNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            dateOfBirth: dateOfBirthNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_DATE_OF_BIRTH,
                payload: dateOfBirthNew,
            })

            console.log('SS')

            await api.post('/settings/user-details/change/date-of-birth', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_DATE_OF_BIRTH,
                    payload: dateOfBirth,
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
                    type: SETTINGS_USER_CHANGE_DATE_OF_BIRTH,
                    payload: dateOfBirth,
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
                    type: SETTINGS_USER_CHANGE_DATE_OF_BIRTH,
                    payload: dateOfBirth,
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
                    type: SETTINGS_USER_CHANGE_DATE_OF_BIRTH,
                    payload: dateOfBirth,
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

// @route    POST api/v1/settings/user-details/change/address
// @desc     Change user's address
// @params   address
export const changeAddressSettings =
    (address, addressNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            address: addressNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_ADDRESS,
                payload: addressNew,
            })

            await api.post('/settings/user-details/change/address', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_ADDRESS,
                    payload: address,
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
                    type: SETTINGS_USER_CHANGE_ADDRESS,
                    payload: address,
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
                    type: SETTINGS_USER_CHANGE_ADDRESS,
                    payload: address,
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
                    type: SETTINGS_USER_CHANGE_ADDRESS,
                    payload: address,
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

// @route    POST api/v1/settings/user-details/change/mobile-number
// @desc     Change user's mobile-number
// @params   mobile-number
export const changeMobileNoSettings =
    (mobileNo, mobileNoNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            mobileNo: mobileNoNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_MOBILE_NUMBER,
                payload: mobileNoNew,
            })

            await api.post('/settings/user-details/change/mobile-number', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_MOBILE_NUMBER,
                    payload: mobileNo,
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
                    type: SETTINGS_USER_CHANGE_MOBILE_NUMBER,
                    payload: mobileNo,
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
                    type: SETTINGS_USER_CHANGE_MOBILE_NUMBER,
                    payload: mobileNo,
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
                    type: SETTINGS_USER_CHANGE_MOBILE_NUMBER,
                    payload: mobileNo,
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

// @route    POST api/v1/settings/user-details/change/pin-code
// @desc     Change user's pin-code
// @params   pin-code
export const changePincodeSettings =
    (pinCode, pinCodeNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            pinCode: pinCodeNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_PINCODE,
                payload: pinCodeNew,
            })

            await api.post('/settings/user-details/change/pin-code', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_PINCODE,
                    payload: pinCode,
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
                    type: SETTINGS_USER_CHANGE_PINCODE,
                    payload: pinCode,
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
                    type: SETTINGS_USER_CHANGE_PINCODE,
                    payload: pinCode,
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
                    type: SETTINGS_USER_CHANGE_PINCODE,
                    payload: pinCode,
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

// @route    POST api/v1/settings/user-details/change/country
// @desc     Change user's country
// @params   country
export const changeCountrySettings =
    (country, countryNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            country: countryNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_COUNTRY,
                payload: countryNew,
            })

            await api.post('/settings/user-details/change/country', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_COUNTRY,
                    payload: country,
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
                    type: SETTINGS_USER_CHANGE_COUNTRY,
                    payload: country,
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
                    type: SETTINGS_USER_CHANGE_COUNTRY,
                    payload: country,
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
                    type: SETTINGS_USER_CHANGE_COUNTRY,
                    payload: country,
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

// @route    POST api/v1/settings/user-details/change/state
// @desc     Change user's state
// @params   state
export const changeStateSettings =
    (state, stateNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            state: stateNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_STATE,
                payload: stateNew,
            })

            await api.post('/settings/user-details/change/state', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_STATE,
                    payload: state,
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
                    type: SETTINGS_USER_CHANGE_STATE,
                    payload: state,
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
                    type: SETTINGS_USER_CHANGE_STATE,
                    payload: state,
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
                    type: SETTINGS_USER_CHANGE_STATE,
                    payload: state,
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

// @route    POST api/v1/settings/user-details/change/city
// @desc     Change user's city
// @params   city
export const changeCitySettings =
    (city, cityNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            city: cityNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_CITY,
                payload: cityNew,
            })

            await api.post('/settings/user-details/change/city', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_CITY,
                    payload: city,
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
                    type: SETTINGS_USER_CHANGE_CITY,
                    payload: city,
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
                    type: SETTINGS_USER_CHANGE_CITY,
                    payload: city,
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
                    type: SETTINGS_USER_CHANGE_CITY,
                    payload: city,
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

// @route    POST api/v1/settings/user-details/change/email
// @desc     Change user's email
// @params   email
export const changeEmailSettings =
    (email, emailNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            email: emailNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_EMAIL,
                payload: emailNew,
            })

            await api.post('/settings/user-details/change/email', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_EMAIL,
                    payload: email,
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
                    type: SETTINGS_USER_CHANGE_EMAIL,
                    payload: email,
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
                    type: SETTINGS_USER_CHANGE_EMAIL,
                    payload: email,
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
                    type: SETTINGS_USER_CHANGE_EMAIL,
                    payload: email,
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

// @route    POST api/v1/settings/user-details/change/name
// @desc     Change user's name
// @params   name
export const changeNameSettings =
    (name, nameNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            name: nameNew,
        })

        try {
            dispatch({
                type: SETTINGS_USER_CHANGE_NAME,
                payload: nameNew,
            })

            await api.post('/settings/user-details/change/name', body)
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_USER_CHANGE_NAME,
                    payload: name,
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
                    type: SETTINGS_USER_CHANGE_NAME,
                    payload: name,
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
                    type: SETTINGS_USER_CHANGE_NAME,
                    payload: name,
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
                    type: SETTINGS_USER_CHANGE_NAME,
                    payload: name,
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
