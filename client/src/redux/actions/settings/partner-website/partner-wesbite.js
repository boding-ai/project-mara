import api from '../../../../utils/api'

import { logout } from '../../auth/auth'

import axios from 'axios'

import { checkDnsRecords } from './checkDnsRecords'

import {
    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    SUCCESS_200,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,
} from '../../types'

import {
    
    // Change Api Key
    SETTINGS_PARTNER_WEBSITE_CHANGE_API_KEY,

    // Delete API Key
    SETTINGS_PARTNER_WEBSITE_DELETE_API_KEY,

    // Change domain url
    SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_URL,

    // Change domain verification settings
    SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
    SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING,
} from '../settings-types'

// @route    POST api/v1/settings/partner-website-details/change/domain-verification-status
// @desc     Change the status of domain verification
// @access   Private
export const changeWebsiteVerificationSettings =
    (domain, domainVerification) => async (dispatch, getState) => {
        const value = {}

        try {
            dispatch({
                type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING,
                payload: true,
            })

            const checkDnsRecordsData = await axios.get(
                `https://dns.google/resolve?name=${domain}&type=TXT&cd=true`
            )

            let ans = checkDnsRecords(checkDnsRecordsData.data.Answer, domain)

            dispatch({
                type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING,
                payload: false,
            })

            if (!ans) {
                value.message = 'DNS records not updated. Could not verify.'
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
                    3000
                )
            }

            if (ans !== domainVerification) {
                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: ans,
                })

                const body = JSON.stringify({
                    domainVerified: ans,
                })

                await api.post(
                    '/settings/partner-website-details/change/domain-verification-status',
                    body
                )

                value.message = 'Domain verified!'
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
            }
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING,
                    payload: false,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: domainVerification,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING,
                    payload: false,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: domainVerification,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING,
                    payload: false,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: domainVerification,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION_LOADING,
                    payload: false,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: domainVerification,
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

// @route    POST api/v1/settings/partner-website-details/change/domain-url
// @desc     Change domain url
// @access   Private
export const changeWebsiteDomainSettings =
    (domainOld, domainNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            domain: domainNew,
        })

        try {
            dispatch({
                type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_URL,
                payload: domainNew,
            })

            dispatch({
                type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                payload: false,
            })

            await api.post(
                '/settings/partner-website-details/change/domain-url',
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: true,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_URL,
                    payload: domainOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: true,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_URL,
                    payload: domainOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: true,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_URL,
                    payload: domainOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_VERIFICATION,
                    payload: true,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_DOMAIN_URL,
                    payload: domainOld,
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

// @route    POST api/v1/settings/partner-website-details/delete/api-key
// @desc     Delete api key
// @access   Private
export const revokeApiKeySettings =
    (apiKeyOld) => async (dispatch, getState) => {
        const value = {}

        try {
            dispatch({
                type: SETTINGS_PARTNER_WEBSITE_DELETE_API_KEY,
                payload: '',
            })

            await api.post('/settings/partner-website-details/delete/api-key')
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: SETTINGS_PARTNER_WEBSITE_DELETE_API_KEY,
                    payload: apiKeyOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_DELETE_API_KEY,
                    payload: apiKeyOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_DELETE_API_KEY,
                    payload: apiKeyOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_DELETE_API_KEY,
                    payload: apiKeyOld,
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

// @route    POST api/v1/settings/partner-website-details/generate/api-key
// @desc     Generate api key
// @access   Private
export const generateNewApiKeySettings =
    (apiKeyOld, apiKeyNew) => async (dispatch, getState) => {
        const value = {}

        const body = JSON.stringify({
            value: apiKeyNew,
        })

        try {
            dispatch({
                type: SETTINGS_PARTNER_WEBSITE_CHANGE_API_KEY,
                payload: apiKeyNew,
            })

            await api.post(
                '/settings/partner-website-details/generate/api-key',
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_API_KEY,
                    payload: apiKeyOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_API_KEY,
                    payload: apiKeyOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_API_KEY,
                    payload: apiKeyOld,
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
                    type: SETTINGS_PARTNER_WEBSITE_CHANGE_API_KEY,
                    payload: apiKeyOld,
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
