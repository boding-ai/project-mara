import api from '../../../../utils/api'

import { logout } from '../../auth/auth'

import {
    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    SUCCESS_200,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,
} from '../../types.js'

import {
    
    // Change business email
    SETTINGS_BUSINESS_CHANGE_EMAIL,

    // Change business name
    SETTINGS_BUSINESS_CHANGE_NAME,

    // Change business shipping address
    SETTINGS_BUSINESS_CHANGE_SHIPPING_ADDRESS,

    // Change business billing address
    SETTINGS_BUSINESS_CHANGE_BILLING_ADDRESS,

    // Change business contact no 
    SETTINGS_BUSINESS_CHANGE_CONTACT_NUMBER,

    // Change business profile pic
    SETTINGS_BUSINESS_CHANGE_PROFILE_PICTURE,
} from '../settings-types'


// @route    POST api/v1/settings/business-details/change/contact-number
// @desc     Change mobile number
// @access   Private
export const changeBusinessContactNoSettings =
    (businessContactNoOld, businessContactNoNew) =>
    async (dispatch) => {
        const value = {}

        const body = JSON.stringify({
            businessContactNo: businessContactNoNew,
        })

        try {
            dispatch({
                type: SETTINGS_BUSINESS_CHANGE_CONTACT_NUMBER,
                payload: businessContactNoNew,
            })

            await api.post(
                '/settings/business-details/change/contact-number',
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
                    type: SETTINGS_BUSINESS_CHANGE_CONTACT_NUMBER,
                    payload: businessContactNoOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_CONTACT_NUMBER,
                    payload: businessContactNoOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_CONTACT_NUMBER,
                    payload: businessContactNoOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_CONTACT_NUMBER,
                    payload: businessContactNoOld,
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

// @route    POST api/v1/settings/business-details/change/billing-address
// @desc     Change billing address of business
// @access   Private
export const changeBusinessBillingAddressSettings =
    (
        businessBillingAddressOld,
        businessBillingAddressNew
    ) =>
    async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            businessBillingAddress: businessBillingAddressNew
        })

        try {
            dispatch({
                type: SETTINGS_BUSINESS_CHANGE_BILLING_ADDRESS,
                payload: businessBillingAddressNew,
            })

            await api.post(
                '/settings/business-details/change/billing-address',
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
                    type: SETTINGS_BUSINESS_CHANGE_BILLING_ADDRESS,
                    payload: businessBillingAddressOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_BILLING_ADDRESS,
                    payload: businessBillingAddressOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_BILLING_ADDRESS,
                    payload: businessBillingAddressOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_BILLING_ADDRESS,
                    payload: businessBillingAddressOld,
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

// @route    POST api/v1/settings/business-details/change/shipping-address
// @desc     Change shipping address of business
// @access   Private
export const changeBusinessShippingAddressSettings =
    (businessShippingAddressOld, businessShippingAddressNew) =>
    async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            businessShippingAddress: businessShippingAddressNew,
        })

        try {
            dispatch({
                type: SETTINGS_BUSINESS_CHANGE_SHIPPING_ADDRESS,
                payload: businessShippingAddressNew,
            })

            await api.post(
                '/settings/business-details/change/shipping-address',
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
                    type: SETTINGS_BUSINESS_CHANGE_SHIPPING_ADDRESS,
                    payload: businessShippingAddressOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_SHIPPING_ADDRESS,
                    payload: businessShippingAddressOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_SHIPPING_ADDRESS,
                    payload: businessShippingAddressOld,
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
                    type: SETTINGS_BUSINESS_CHANGE_SHIPPING_ADDRESS,
                    payload: businessShippingAddressOld,
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

// @route    POST api/v1/settings/business-details/change/email
// @desc     Change email address of business
// @access   Private
export const changeBusinessEmailSettings =
    (emailIdOld, emailIdNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            emailId: emailIdNew,
        })

        try {

            dispatch({
                type: SETTINGS_BUSINESS_CHANGE_EMAIL,
                payload: emailIdNew
            })

            await api.post('/settings/business-details/change/email', body)

        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_BUSINESS_CHANGE_EMAIL,
                    payload: emailIdOld,
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
                       type: SETTINGS_BUSINESS_CHANGE_EMAIL,
                       payload: emailIdOld,
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
                       type: SETTINGS_BUSINESS_CHANGE_EMAIL,
                       payload: emailIdOld,
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
                       type: SETTINGS_BUSINESS_CHANGE_EMAIL,
                       payload: emailIdOld,
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

// @route    POST api/v1/settings/business-details/change/name
// @desc     Change name of business
// @access   Private
export const changeBusinessNameSettings =
    (businessNameOld, businessNameNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            businessName: businessNameNew,
        })

        try {

            dispatch({
                type: SETTINGS_BUSINESS_CHANGE_NAME,
                payload: businessNameNew,
            })

            await api.post('/settings/business-details/change/name', body)

        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_BUSINESS_CHANGE_NAME,
                    payload: businessNameOld,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    4000
                )

                return businessNameOld
            } else if (error.response.status === 401) {
                value.message = 'Session expired. Please login.'
                value.type = 'error'

                dispatch({
                    type: ERROR_401,
                    payload: value,
                })

                   dispatch({
                       type: SETTINGS_BUSINESS_CHANGE_NAME,
                       payload: businessNameOld,
                   })

                dispatch(logout())

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    4000
                )
                return businessNameOld
            } else if (error.response.status === 400) {
                value.message = error.response.data.errors[0].msg
                value.type = 'error'

                dispatch({
                    type: ERROR_400,
                    payload: value,
                })

                   dispatch({
                       type: SETTINGS_BUSINESS_CHANGE_NAME,
                       payload: businessNameOld,
                   })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    4000
                )
                return businessNameOld
            } else {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_SOMETHING_ELSE,
                    payload: value,
                })

                   dispatch({
                       type: SETTINGS_BUSINESS_CHANGE_NAME,
                       payload: businessNameOld,
                   })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    4000
                )
                return businessNameOld
            }
        }
    }

// @route    POST api/v1/settings/business-details/change/profile-picture
// @desc     Change profile picture of business
// @access   Private
export const changeBusinessProfilePic =
    (profilePicOld, profilePicNew) => async (dispatch, getState) => {
        const value = {}

        console.log(profilePicOld, profilePicNew)

        const body = JSON.stringify({
            imageUrl: profilePicNew,
        })

        try {

            dispatch({
                type: SETTINGS_BUSINESS_CHANGE_PROFILE_PICTURE,
                payload: profilePicNew,
            })

            await api.post(
                '/settings/business-details/change/profile-picture',
                body
            )

             value.message = 'Profile pic changed!'
             value.type = 'success'

             dispatch({
                 type: SUCCESS_200,
                 payload: value,
             })

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
                    type: SETTINGS_BUSINESS_CHANGE_PROFILE_PICTURE,
                    payload: profilePicOld,
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
                       type: SETTINGS_BUSINESS_CHANGE_PROFILE_PICTURE,
                       payload: profilePicOld,
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
                       type: SETTINGS_BUSINESS_CHANGE_PROFILE_PICTURE,
                       payload: profilePicOld,
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
                       type: SETTINGS_BUSINESS_CHANGE_PROFILE_PICTURE,
                       payload: profilePicOld,
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