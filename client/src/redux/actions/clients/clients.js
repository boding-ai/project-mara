import api from '../../../utils/api'
import {
    // Clients Array
    CLIENTS_MINIMIZE_TAB,
    CLOSE_CLIENTS_MINIMIZE_TAB,

    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    SUCCESS_200,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,

    // Clients List All
    CLIENTS_LIST_ALL_LOADING,
    CLIENTS_LIST_ALL_LOADING_COMPLETE,
    CLIENTS_LIST_RESET,
    ADD_ID_FROM_SEARCH_OWNER,

    // Search Clients
    SEARCH_CLIENTS_LOADING,
    SEARCH_CLIENTS,
    SEARCH_CLIENTS_RESET,

    // Search Clients for Record
    SEARCH_CLIENTS_FOR_RECORD_LOADING,
    SEARCH_CLIENTS_FOR_RECORD,

    // Hide/unHide Client List Card
    UNHIDE_LIST_CARD,
    HIDE_LIST_CARD,

    // Edit Client Profiles
    EDIT_PROFILES_CLIENTS_LOADING,
    RESET_EDIT_PROFILES_CLIENTS_LOADING,

    // For Owner
    INITIATE_OWNER_EDIT_PROFILE_VALUES,
    RESET_OWNER_EDIT_PROFILE_VALUES,

    // For Pet
    INITIATE_PET_EDIT_PROFILE_VALUES,
    RESET_PET_EDIT_PROFILE_VALUES,
    INITIATE_PET_EDIT_OWNER_PROFILE_VALUES,

    // Delete Profile Loader
    DELETE_CLIENTS_PROFILES_LOADING_COMPLETE,
    DELETE_CLIENTS_PROFILES_LOADING,

    // Clients List Check for Loading
    CLIENTS_LIST_CHECK_ACTIVE,
    CLIENTS_LIST_CHECK_INACTIVE,

    // Pet Details From Owner Id
    GET_PET_DETAILS_FROM_OWNER_ID_LOADING,
} from '../types'

import {
    // Change clients list type
    SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
} from '../settings/settings-types'


import { logout } from '../auth/auth'

export const clientsListCheckMakeActive = () => async (dispatch, getState) => {
    dispatch({
        type: CLIENTS_LIST_CHECK_ACTIVE,
    })
}

export const clientsListCheckMakeInactive = () => async (dispatch, getState) => {
    dispatch({
        type: CLIENTS_LIST_CHECK_INACTIVE,
    })
}


export const deleteClientOwnerProfile = (listID, listType) => async (dispatch) => {
    const value = {}

    // Attach the headers
    const body = JSON.stringify({
        listID,
    })

    try {

        dispatch({
            type: DELETE_CLIENTS_PROFILES_LOADING,
        })

        const res = await api.post(`/clients/remove-${listType}-profile`, body)

        dispatch({
            type: DELETE_CLIENTS_PROFILES_LOADING_COMPLETE,
        })

        value.message = `${listType} deleted successfully!`
        value.type = 'success'

        dispatch({
            type: SUCCESS_200,
            payload: value,
        })

        dispatch(getClientsListAll())

        setTimeout(
            () =>
                dispatch({
                    type: SNACKBAR_RESET,
                }),
            5000
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
                5000
            )
        } else if (error.response.status === 401) {
             value.message =
                "Session has expired. Please login."
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch(logout())

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 400) {
            value.message = 'Could not delete profile. PLease try again :('
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
                6000
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
                5000
            )
        }
    }
}

// Reset Input Values for Pet Profile
export const resetDetailsForEditingPet = () => async (dispatch) => {
    dispatch({
        type: RESET_PET_EDIT_PROFILE_VALUES,
    })
}

// Reset Input Values for Owner Profile
export const resetDetailsForEditingOwner = () => async (dispatch) => {
    dispatch({
        type: RESET_OWNER_EDIT_PROFILE_VALUES,
    })
}

// Load details for Editing 
export const loadDetailsForEditing = (listID, listType) => async (dispatch) => {
    const value = {}

    const body = JSON.stringify({
        listID
    })

    try {
        // FOR OWNER
        if (listType === 'owner') {
            dispatch({
                type: EDIT_PROFILES_CLIENTS_LOADING,
            })

            const res = await api.post(
                '/clients/search-owner-for-editing',
                body
            )

            console.log(res.data)

            dispatch({
                type: INITIATE_OWNER_EDIT_PROFILE_VALUES,
                payload: res.data,
            })
        }

        // FOR PET
        if (listType === 'pet') {
            dispatch({
                type: EDIT_PROFILES_CLIENTS_LOADING,
            })

            const res = await api.post('/clients/search-pet-for-editing', body)

            console.log(res.data)

            dispatch({
                type: INITIATE_PET_EDIT_PROFILE_VALUES,
                payload: res.data,
            })

            const body2 = JSON.stringify({
                listID: res.data.owner_id,
            })

            dispatch({
                type: ADD_ID_FROM_SEARCH_OWNER,
                payload: res.data.owner_id,
            })

            const res2 = await api.post(
                '/clients/search-owner-for-editing',
                body2
            )

            dispatch({
                type: INITIATE_PET_EDIT_OWNER_PROFILE_VALUES,
                payload: res2.data,
            })

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
                type: RESET_EDIT_PROFILES_CLIENTS_LOADING,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 401) {
             value.message = 'Session expired. Please login.'
             value.type = 'error'

             dispatch({
                 type: ERROR_401,
                 payload: value,
             })

            dispatch({
                type: RESET_EDIT_PROFILES_CLIENTS_LOADING,
            })

            dispatch(logout())

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 400) {
            value.message = 'Bad Request'
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: RESET_EDIT_PROFILES_CLIENTS_LOADING,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                6000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: RESET_EDIT_PROFILES_CLIENTS_LOADING,
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

// Hide Client List Card
export const hideClientListCard = (index) => async (dispatch) => {
    dispatch({
        type: HIDE_LIST_CARD,
        payload: index
    })
}

// Unhide Client List Card
export const unHideClientListCard = (index) => async (dispatch) => {
    dispatch({
        type: UNHIDE_LIST_CARD,
        payload: index,
    })
}

export const clientsMainArray = (type) => (dispatch) => {

    dispatch({
        type: CLIENTS_MINIMIZE_TAB,
        payload: type,
    })
}

export const closeClientsMainArray = (value) => (dispatch) => {
    dispatch({
        type: CLOSE_CLIENTS_MINIMIZE_TAB,
        payload: value,
    })
}

// Select Owner from search

// Reset after search 
export const stopLoadingSearchClients = () => async (dispatch) => {
    dispatch({
        type: SEARCH_CLIENTS_RESET,
    })
}

// Search Clients
export const searchClients = (searchQuery) => async (dispatch) => {
    const value = {}

    console.log(searchQuery)

    const body = JSON.stringify({
        searchQuery
    })

    try {
        
        dispatch({
            type: SEARCH_CLIENTS_LOADING,
        })

        const res = await api.post('/clients/search-clients-list', body)

    dispatch({
            type: SEARCH_CLIENTS,
            payload: res.data
        })

    } catch (error) {
        if (error.response.status === 400) {
            value.message = 'Not Found'
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: SEARCH_CLIENTS_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 401) {
             value.message = 'Session has expired. Please login.'
             value.type = 'error'

             dispatch({
                 type: ERROR_401,
                 payload: value,
             })

             dispatch(logout())

            dispatch({
                type: SEARCH_CLIENTS_RESET,
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
                type: SEARCH_CLIENTS_RESET,
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

// Search Clients For Records
export const searchClientsForRecord = (searchQuery) => async (dispatch) => {
    const value = {}

    const body = JSON.stringify({
        searchQuery
    })

    try {
        
        dispatch({
            type: SEARCH_CLIENTS_FOR_RECORD_LOADING,
            payload: true
        })

        const res = await api.post('/clients/search-clients-list-for-record', body)

        dispatch({
            type: SEARCH_CLIENTS_FOR_RECORD_LOADING,
            payload: false,
        })

        console.log(res.data)

        dispatch({
            type: SEARCH_CLIENTS_FOR_RECORD,
            payload: res.data,
        })

    } catch (error) {
        if (error.response.status === 400) {
            value.message = 'Not Found'
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: SEARCH_CLIENTS_FOR_RECORD_LOADING,
                payload: false,
            })

                        dispatch({
                type: SEARCH_CLIENTS_FOR_RECORD,
                payload: []
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 401) {
             value.message = 'Session expired. Please login.'
             value.type = 'error'

             dispatch({
                 type: ERROR_401,
                 payload: value,
             })

            dispatch({
                type: SEARCH_CLIENTS_FOR_RECORD_LOADING,
                payload: false,
            })

            dispatch({
                type: SEARCH_CLIENTS_FOR_RECORD,
                payload: [],
            })

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
                type: SEARCH_CLIENTS_FOR_RECORD_LOADING,
                payload: false,
            })

                        dispatch({
                type: SEARCH_CLIENTS_FOR_RECORD,
                payload: []
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

// Get all CLients when rendering
export const getClientsListAll = () => async (dispatch) => {

    const value = {}

    try {

        dispatch({
            type: CLIENTS_LIST_ALL_LOADING
        })

        dispatch({
            type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
            payload: 'all'
        })

        const res = await api.get('/clients/clients-list-all')

        dispatch({
            type: CLIENTS_LIST_ALL_LOADING_COMPLETE,
            payload: res.data
        })

        dispatch(clientsListCheckMakeInactive())
    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                    dispatch({
                        type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                        payload: 'none',
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
                "Session has expired. Please login."
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                             dispatch({
                                 type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                 payload: 'none',
                             })

                                         dispatch(logout())


            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 400) {
            value.message = 'Bad Request'
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                             dispatch({
                                 type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                 payload: 'none',
                             })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                6000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                             dispatch({
                                 type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                 payload: 'none',
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

// FILTER -> Get only Owners
export const getOwnersOnlyFromClientsList = () => async (dispatch) => {
    const value = {}

    try {
        dispatch({
            type: CLIENTS_LIST_ALL_LOADING,
        })

                         dispatch({
                             type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                             payload: 'owners',
                         })

        const res = await api.get('/clients/clients-list-owners-only')

        dispatch({
            type: CLIENTS_LIST_ALL_LOADING_COMPLETE,
            payload: res.data,
        })

       dispatch(clientsListCheckMakeInactive())
    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                             dispatch({
                                 type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                 payload: 'none',
                             })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 401) {
             value.message = 'Session has expired. Please login.'
             value.type = 'error'

             dispatch({
                 type: ERROR_401,
                 payload: value,
             })

                              dispatch({
                                  type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                  payload: 'none',
                              })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                         dispatch(logout())


            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                             dispatch({
                                 type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                 payload: 'none',
                             })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                6000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                             dispatch({
                                 type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                 payload: 'none',
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

// FILTER -> Get only Pets
export const getPetsOnlyFromClientsList = () => async (dispatch) => {
    const value = {}

    try {
        dispatch({
            type: CLIENTS_LIST_ALL_LOADING,
        })

                         dispatch({
                             type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                             payload: 'pets',
                         })

        const res = await api.get('/clients/clients-list-pets-only')

        dispatch({
            type: CLIENTS_LIST_ALL_LOADING_COMPLETE,
            payload: res.data,
        })

        dispatch(clientsListCheckMakeInactive())
    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                             dispatch({
                                 type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                 payload: 'none',
                             })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
            )
        } else if (error.response.status === 401) {
             value.message = 'Session has expired. Please login.'
             value.type = 'error'

             dispatch({
                 type: ERROR_401,
                 payload: value,
             })

                              dispatch({
                                  type: SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
                                  payload: 'none',
                              })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

                         dispatch(logout())


            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                5000
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
                                 payload: 'none',
                             })

            dispatch({
                type: CLIENTS_LIST_RESET,
            })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                6000
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
                                 payload: 'none',
                             })

            dispatch({
                type: CLIENTS_LIST_RESET,
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

// Get owner name
export const getOwnerName = (ownerID) => async (dispatch) => {
    const value = {}

    const body = JSON.stringify({
        ownerID,
    })

    try {

        const res = await api.post('/clients/get-owner-name', body)

        console.log('OWNER DATA', res.data.owner_name)

        return res.data.owner_name

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
                5000
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
                5000
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
                6000
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
                5000
            )
        }
    }
}

// Get pet details
export const getPetDetails = (ownerID) => async (dispatch) => {
    const value = {}

    const body = JSON.stringify({
        ownerID,
    })

    dispatch({
        type: GET_PET_DETAILS_FROM_OWNER_ID_LOADING,
        payload: true
    })

    try {
        const res = await api.post('/clients/get-pet-details-from-owner', body)

         dispatch({
             type: GET_PET_DETAILS_FROM_OWNER_ID_LOADING,
             payload: false,
         })

        return res.data
    } catch (error) {
        if (error.response.status === 500) {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

                     dispatch({
                         type: GET_PET_DETAILS_FROM_OWNER_ID_LOADING,
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
            value.message = 'Session expired. Please login.'
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

                     dispatch({
                         type: GET_PET_DETAILS_FROM_OWNER_ID_LOADING,
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
        } else if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

                     dispatch({
                         type: GET_PET_DETAILS_FROM_OWNER_ID_LOADING,
                         payload: false,
                     })

            setTimeout(
                () =>
                    dispatch({
                        type: SNACKBAR_RESET,
                    }),
                6000
            )
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_SOMETHING_ELSE,
                payload: value,
            })

                     dispatch({
                         type: GET_PET_DETAILS_FROM_OWNER_ID_LOADING,
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