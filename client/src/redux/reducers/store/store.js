import {
    // Get store details
    STORE_DETAILS_LOADING,
    STORE_DETAILS,
    GET_STORE_DETAILS_ALLOW,

    // Add new store
    ADD_NEW_STORE_DETAILS,
} from '../../actions/types'

const initialState = {
    storeDetailsLoading: false,
    addNewStoreSuccess: false,
    addNewStoreLoading: false,
    getStoreDetailsAllow: true,
    storeDetails: [],
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // Add new store 
        case ADD_NEW_STORE_DETAILS:
            return {
                ...state,
                addNewStoreLoading: payload.loading,
                addNewStoreSuccess: payload.success,
            }

        // Allow store details fetch
        case GET_STORE_DETAILS_ALLOW:
            return {
                ...state,
                getStoreDetailsAllow: payload,
            }

        // Store Details Loading
        case STORE_DETAILS_LOADING:
            return {
                ...state,
                storeDetailsLoading: payload,
            }

        // Store details
        case STORE_DETAILS:
            return {
                ...state,
                storeDetails: payload,
            }

        default:
            return state
    }
}

export default authReducer
