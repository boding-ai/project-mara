import api from '../../../utils/api'

import { getClientsListAll, getOwnersOnlyFromClientsList, getPetsOnlyFromClientsList } from '../clients/clients'
import { logout } from '../auth/auth'

import {
    // Snackbar
    ERROR_400,
    ERROR_401,
    ERROR_500,
    SUCCESS_200,
    ERROR_SOMETHING_ELSE,
    SNACKBAR_RESET,

    // Add New Owner
    ADD_OWNER_LOADING,

    // Search Owner
    SEARCH_OWNER,
    SEARCH_OWNER_LOADING,
    ADD_ID_FROM_SEARCH_OWNER,

    // Add New Pet
    ADD_PET_LOADING,
    ADD_PET_LOADING_COMPLETE,
    ADD_PET_RESET,
} from '../types'
// ------------------------- PET -----------------------------------
// Reset after pet window closed
export const addNewPetWindowClosed = () => async (dispatch, getState) => {

    dispatch({
        type: ADD_PET_RESET,
    })
}

// Edit Pet Profile
export const editPetProfile =
    (sendPetData, ownerIdNew, ownerIdOld, petID) =>
    async (dispatch, getState) => {
        const value = {}

        const { clients } = getState()

        const {
            petNameNew,
            petSpeciesNew,
            petBreedNew,
            petAgeNew,
            petAgeTimeNew,
            petPhysicalFeaturesNew,
            petStatusNew,
            petEstimatedBirthDate,
            petSpeciesDetailsStateNew,
        } = sendPetData

        console.log(
            petNameNew,
            petSpeciesNew,
            petBreedNew,
            petAgeNew,
            petAgeTimeNew,
            petPhysicalFeaturesNew,
            petStatusNew,
            petEstimatedBirthDate,
            petSpeciesDetailsStateNew,
            ownerIdNew,
            ownerIdOld
        )

        // Attach the headers
        const body = JSON.stringify({
            petID,
            petNameNew,
            petSpeciesNew,
            petBreedNew,
            petAgeNew,
            petAgeTimeNew,
            petPhysicalFeaturesNew,
            petStatusNew,
            petEstimatedBirthDate,
            petSpeciesDetailsStateNew,
            ownerIdNew,
            ownerIdOld,
        })

        try {
            dispatch({
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: true,
                },
            })

            const res = await api.post('/profiles/edit-pet-profile', body)

            dispatch({
                type: ADD_OWNER_LOADING,
                payload: {
                    success: true,
                    loading: false,
                },
            })

            value.message = 'Pet profile edited!'
            value.type = 'success'

            dispatch({
                type: SUCCESS_200,
                payload: value,
            })

            if (clients.clientsType === 'all') {
                dispatch(getClientsListAll())
            }
            if (clients.clientsType === 'pets') {
                dispatch(getPetsOnlyFromClientsList())
            }
            if (clients.clientsType === 'owners') {
                dispatch(getOwnersOnlyFromClientsList())
            }

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

                dispatch({
                    type: ADD_OWNER_LOADING,
                    payload: {
                        success: false,
                        loading: false,
                    },
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
                    type: ADD_OWNER_LOADING,
                    payload: {
                        success: false,
                        loading: false,
                    },
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
                    type: ADD_OWNER_LOADING,
                    payload: {
                        success: false,
                        loading: false,
                    },
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
                    type: ADD_OWNER_LOADING,
                    payload: {
                        success: false,
                        loading: false,
                    },
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

// Add new Pet 
export const addNewPet =(sendPetData, ownerId) => async (dispatch, getState) => {
        const {
            petName,
            petSpecies,
            petBreed,
            petAge,
            petAgeTime,
            petPhysicalFeatures,
            petStatus,
            petEstimatedBirthDate,
            petSpeciesDetailsState,
        } = sendPetData

        const value = {}

        const { clients }  = getState()

        // Attach the headers
        const body = JSON.stringify({
            petName,
            petSpecies,
            petBreed,
            petAge,
            petAgeTime,
            petPhysicalFeatures,
            petStatus,
            ownerId,
            petEstimatedBirthDate,
            petSpeciesDetailsState,
        })

        try {
            dispatch({
                type: ADD_PET_LOADING,
            })

            const res = await api.post('/profiles/add-new-pet', body)

            dispatch({
                type: ADD_PET_LOADING_COMPLETE,
            })

            value.message = 'New Owner and Pet Added!'
            value.type = 'success'

            dispatch({
                type: SUCCESS_200,
                payload: value,
            })

            if (clients.clientsType === 'all') {
                dispatch(getClientsListAll())
            }
            if (clients.clientsType === 'pets') {
                dispatch(getPetsOnlyFromClientsList())
            }
            if (clients.clientsType === 'owners') {
                dispatch(getOwnersOnlyFromClientsList())
            }

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
                    type: ADD_PET_RESET,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
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
                    type: ADD_PET_RESET,
                })

                setTimeout(
                    () =>
                        dispatch({
                            type: SNACKBAR_RESET,
                        }),
                    3000
                )
            } else if (error.response.status === 400) {
                
                value.message = 'Bad Request'
                value.type = 'error'

                dispatch({
                    type: ERROR_400,
                    payload: value,
                })

                dispatch({
                    type: ADD_PET_RESET,
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
                    type: ADD_PET_RESET,
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


// ----------------- OWNER --------------------------------------

// Reset after owner window closed
export const addNewOwnerWindowClosed = () => async (dispatch, getState) => {

    const { profiles } = getState()

    if (profiles.addOwnerSuccessful) {
        dispatch(getClientsListAll())
    } 

    dispatch({
        type: ADD_OWNER_LOADING,
        payload: {
            success: false,
            loading: false,
        },
    })
}

// Add owner ID if only searching 
export const addIdFromSearchOwner = (id) => async (dispatch) => {
    
    dispatch({
        type: ADD_ID_FROM_SEARCH_OWNER,
        payload: id,
    })
}

// Search Owner
export const searchOwner = (searchQuery) => async (dispatch) => {
    let value = {}
    
    const body = JSON.stringify({
        searchQuery
    })

    try {

        dispatch({
            type: SEARCH_OWNER_LOADING,
            payload: true
        })

        const res = await api.post('/profiles/search-owner', body)

        dispatch({
            type: SEARCH_OWNER_LOADING,
            payload: false,
        })

        dispatch({
            type: SEARCH_OWNER,
            payload: res.data
        })

    } catch (error) {
        if (error.response.status === 400) {
            value.message = error.response.data.errors[0].msg
            value.type = 'error'

            dispatch({
                type: ERROR_400,
                payload: value,
            })

        dispatch({
            type: SEARCH_OWNER_LOADING,
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
            value.message =
                "Session expired. Please login."
            value.type = 'error'

            dispatch({
                type: ERROR_401,
                payload: value,
            })

        dispatch({
            type: SEARCH_OWNER_LOADING,
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
        } else {
            value.message = 'Oops! Something went wrong. Please reload.'
            value.type = 'error'

            dispatch({
                type: ERROR_500,
                payload: value,
            })

        dispatch({
            type: SEARCH_OWNER_LOADING,
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

// Add new owner when adding a pet
export const addNewOwnerWhenPetAdded =
    ({ ownerName, ownerMobileNo, ownerAddress, ownerEmail }) =>
    async (dispatch) => {
        const value = {}

        // Attach the headers
        const body = JSON.stringify({
            ownerName,
            ownerMobileNo,
            ownerAddress,
            ownerEmail,
        })

        try {
            dispatch({
                type: ADD_OWNER_LOADING,
                payload: {
                    loading: true,
                    success: false
                },
            })

            const res = await api.post('/profiles/add-new-owner', body)

            dispatch({
                type: ADD_OWNER_LOADING,
                payload: {
                    loading: false,
                    success: true,
                },
            })

            return res.data.owner_id
        } catch (error) {
            if (error.response.status === 500) {
                value.message = 'Oops! Something went wrong. Please reload.'
                value.type = 'error'

                dispatch({
                    type: ERROR_500,
                    payload: value,
                })

                dispatch({
                    type: ADD_OWNER_LOADING,
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
                    type: ADD_OWNER_LOADING,
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
                    type: ADD_OWNER_LOADING,
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
                    type: ADD_OWNER_LOADING,
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

// Edit Owner Profile
export const editOwnerProfile =
    (ownerName, ownerMobileNo, ownerAddress, ownerEmail, ownerID) =>
    async (dispatch, getState) => {
        const value = {}

        const { clients } = getState()

        // Attach the headers
        const body = JSON.stringify({
            ownerName,
            ownerMobileNo,
            ownerAddress,
            ownerEmail,
            ownerID,
        })

        console.log(ownerName, ownerMobileNo, ownerAddress, ownerEmail, ownerID)

        try {
            dispatch({
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: true
                }
            })

            const res = await api.post('/profiles/edit-owner-profile', body)

            dispatch({
                type: ADD_OWNER_LOADING,
                payload: {
                    success: true,
                    loading: false,
                },
            })

            value.message = 'Owner profile edited!'
            value.type = 'success'

            dispatch({
                type: SUCCESS_200,
                payload: value,
            })

            if (clients.clientsType === 'all') {
                dispatch(getClientsListAll())
            }
            if (clients.clientsType === 'pets') {
                dispatch(getPetsOnlyFromClientsList())
            }
            if (clients.clientsType === 'owners') {
                dispatch(getOwnersOnlyFromClientsList())
            }

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

            dispatch({
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: false,
                },
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
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: false,
                },
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
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: false,
                },
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
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: false,
                },
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

// Add new Owner
export const addNewOwner =
    (ownerName, ownerMobileNo, ownerAddress, ownerEmail) =>
    async (dispatch, getState) => {
        const value = {}

        const { clients } = getState()

        // Attach the headers
        const body = JSON.stringify({
            ownerName,
            ownerMobileNo,
            ownerAddress,
            ownerEmail,
        })

        try {
                        dispatch({
                            type: ADD_OWNER_LOADING,
                            payload: {
                                success: false,
                                loading: true,
                            },
                        })
            const res = await api.post('/profiles/add-new-owner', body)

                       dispatch({
                           type: ADD_OWNER_LOADING,
                           payload: {
                               success: true,
                               loading: false,
                           },
                       })

            value.message = 'New Owner Added!'
            value.type = 'success'

            dispatch({
                type: SUCCESS_200,
                payload: value,
            })

            if (clients.clientsType === 'all') {
                dispatch(getClientsListAll())
            }
            if (clients.clientsType === 'pets') {
                dispatch(getPetsOnlyFromClientsList())
            }
            if (clients.clientsType === 'owners') {
                dispatch(getOwnersOnlyFromClientsList())
            }

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

            dispatch({
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: false,
                },
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
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: false,
                },
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
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: false,
                },
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
                type: ADD_OWNER_LOADING,
                payload: {
                    success: false,
                    loading: false,
                },
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
