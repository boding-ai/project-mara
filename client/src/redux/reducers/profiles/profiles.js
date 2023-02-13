import {
    // ADD Owner
    ADD_OWNER_LOADING,

    // Search Owner
    SEARCH_OWNER,
    SEARCH_OWNER_LOADING,
    ADD_ID_FROM_SEARCH_OWNER,

    // Add New Pet
    ADD_PET_LOADING,
    ADD_PET_LOADING_COMPLETE,
    ADD_PET_RESET,
} from '../../actions/types'

const initialState = {
    // Search Owner
    searchReturnedValue: [],
    searchOwnerLoading: false,

    // Add Owner
    addOwnerLoading: false,
    addOwnerSuccessful: false,

    // Add Pet + Owner
    ownerID: 0,
    addPetLoading: false,
    addPetSuccessful: false,
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // ------------ SEARCH OWNER --------------
        case SEARCH_OWNER:
            return {
                ...state,
                searchReturnedValue: payload,
            }

        case SEARCH_OWNER_LOADING:
            return {
                ...state,
                searchOwnerLoading: payload,
            }

        case ADD_ID_FROM_SEARCH_OWNER:
            return {
                ...state,
                ownerID: payload,
            }

        // ---------- ADD PET --------------
        case ADD_PET_LOADING:
            return {
                ...state,
                addPetLoading: true,
            }

        case ADD_PET_LOADING_COMPLETE:
            return {
                ...state,
                addPetLoading: false,
                addPetSuccessful: true,
                ownerID: 0,
            }

        case ADD_PET_RESET:
            return {
                ...state,
                addPetSuccessful: false,
                addPetLoading: false,
                ownerID: 0,
            }

        // ---------- ADD OWNER --------------
        case ADD_OWNER_LOADING:
            return {
                ...state,
                addOwnerLoading: payload.loading,
                addOwnerSuccessful: payload.success,
            }

        default:
            return state
    }
}

export default authReducer
