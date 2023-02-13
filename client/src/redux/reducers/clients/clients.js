import {
    CLIENTS_MINIMIZE_TAB,
    CLOSE_CLIENTS_MINIMIZE_TAB,

    // Clients List All
    CLIENTS_LIST_ALL_LOADING,
    CLIENTS_LIST_ALL_LOADING_COMPLETE,
    CLIENTS_LIST_RESET,

    // Clients list loading
    SEARCH_CLIENTS_LOADING,
    SEARCH_CLIENTS,
    SEARCH_CLIENTS_RESET,

    // Clients list for records
    SEARCH_CLIENTS_FOR_RECORD_LOADING,
    SEARCH_CLIENTS_FOR_RECORD,

    // Edit Menu
    HIDE_LIST_CARD,
    UNHIDE_LIST_CARD,

    // Edit Profiles
    EDIT_PROFILES_CLIENTS_LOADING,
    RESET_EDIT_PROFILES_CLIENTS_LOADING,

    // Edit Owner Profile
    INITIATE_OWNER_EDIT_PROFILE_VALUES,
    RESET_OWNER_EDIT_PROFILE_VALUES,

    // For Pet
    INITIATE_PET_EDIT_PROFILE_VALUES,
    RESET_PET_EDIT_PROFILE_VALUES,
    INITIATE_PET_EDIT_OWNER_PROFILE_VALUES,

    // Delete Loader
    DELETE_CLIENTS_PROFILES_LOADING,
    DELETE_CLIENTS_PROFILES_LOADING_COMPLETE,

    // Clients List Check for Loading
    CLIENTS_LIST_CHECK_ACTIVE,
    CLIENTS_LIST_CHECK_INACTIVE,

    // Pet Details From Owner Id
    GET_PET_DETAILS_FROM_OWNER_ID_LOADING,
} from '../../actions/types'

import {
        SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE,
} from '../../actions/settings/settings-types'

const initialState = {
    clientsType: 'none',
    clientsMinimizeTabs: [],
    clientsListAllGetLoading: false,
    clientsList: [],
    clientsSearchLoading: false,
    searchReturnedValueClients: [],
    showListCard: [],

    editProfilesClientsLoading: false,
    profileDeletingLoading: false,

    // Edit Owner Profile
    ownerID: '',
    ownerName: '',
    ownerAddress: '',
    ownerEmail: '',
    ownerMobileNo: '',

    // Edit Pet Profile
    petID: '',
    petName: '',
    petSpecies: '',
    petBreed: '',
    petAge: '',
    petPhysicalFeatures: [],
    petPhysicalFeaturesInput: '',
    petStatus: 'withOwner',
    petAgeTime: '',
    petSpeciesDetailsState: false,

    clientListCheck: true,

    // Client List for Recording
    clientsSearchForRecordLoading: false,
    clientsSearchForRecordValues: [],

    // Pet Details From Owner Id
    petDetailsFromOwnerLoading: false,
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // Pet Details From Owner Id
        case GET_PET_DETAILS_FROM_OWNER_ID_LOADING:
            return {
                ...state,
                petDetailsFromOwnerLoading: payload
            }

        // Clients list check
        case CLIENTS_LIST_CHECK_INACTIVE:
            return {
                ...state,
                clientListCheck: false,
            }

        case CLIENTS_LIST_CHECK_ACTIVE:
            return {
                ...state,
                clientListCheck: true,
            }

        // Change client type
        case SETTINGS_SYSTEM_CHANGE_CLIENTS_LIST_TYPE:
            return {
                ...state,
                clientsType: payload,
            }
        // -------EDIT PROFILES------------
        case EDIT_PROFILES_CLIENTS_LOADING:
            return {
                ...state,
                editProfilesClientsLoading: true,
            }

        case RESET_EDIT_PROFILES_CLIENTS_LOADING:
            return {
                ...state,
                editProfilesClientsLoading: false,
            }

        case DELETE_CLIENTS_PROFILES_LOADING:
            return {
                ...state,
                profileDeletingLoading: true,
            }

        case DELETE_CLIENTS_PROFILES_LOADING_COMPLETE:
            return {
                ...state,
                profileDeletingLoading: false,
            }

        // ---------------- EDIT PET PROFILE ----------
        case INITIATE_PET_EDIT_PROFILE_VALUES:
            return {
                ...state,
                petID: payload.pet_id,
                petName: payload.pet_name,
                petSpecies: payload.pet_species,
                petBreed: payload.pet_breed,
                petAge: payload.pet_age.split(' ')[0],
                petAgeTime: payload.pet_age.split(' ')[1],
                petPhysicalFeatures: payload.pet_physical_features,
                petPhysicalFeaturesInput: '',
                petStatus: payload.pet_status,
                petSpeciesDetailsState: payload.pet_details_state,
            }

        case INITIATE_PET_EDIT_OWNER_PROFILE_VALUES:
            return {
                ...state,
                ownerName: payload.owner_name,
                ownerEmail: payload.email_id,
                ownerMobileNo: payload.mobile_no,
                ownerAddress: payload.address,
                editProfilesClientsLoading: false,
            }

        case RESET_PET_EDIT_PROFILE_VALUES:
            return {
                ...state,
                petID: '',
                ownerName: '',
                ownerEmail: '',
                ownerMobileNo: '',
                ownerAddress: '',
                petName: '',
                petSpecies: '',
                petBreed: '',
                petAge: '',
                petAgeTime: '',
                petPhysicalFeatures: [],
                petPhysicalFeaturesInput: '',
                petStatus: 'withOwner',
                petSpeciesDetailsState: false,
            }

        // ---------------- EDIT OWNER PROFILE ----------
        case INITIATE_OWNER_EDIT_PROFILE_VALUES:
            return {
                ...state,
                ownerID: payload.owner_id,
                ownerName: payload.owner_name,
                ownerAddress: payload.address,
                ownerEmail: payload.email_id,
                ownerMobileNo: payload.mobile_no,
                editProfilesClientsLoading: false,
            }

        case RESET_OWNER_EDIT_PROFILE_VALUES:
            return {
                ...state,
                ownerID: '',
                ownerName: '',
                ownerAddress: '',
                ownerEmail: '',
                ownerMobileNo: '',
            }

        // Edit Menu
        case HIDE_LIST_CARD:
            return {
                ...state,
                showListCard: [...state.showListCard, payload],
            }
        case UNHIDE_LIST_CARD:
            return {
                ...state,
                showListCard: state.showListCard.filter(
                    (ele, index) => ele !== payload
                ),
            }

        // Array for minimization on Clients page
        case CLIENTS_MINIMIZE_TAB:
            return {
                ...state,
                clientsMinimizeTabs: [...state.clientsMinimizeTabs, payload],
            }

        case CLOSE_CLIENTS_MINIMIZE_TAB:
            return {
                ...state,
                clientsMinimizeTabs: state.clientsMinimizeTabs.filter(
                    (ele, index) => index !== payload
                ),
            }

        // Search Clients
        case SEARCH_CLIENTS_LOADING:
            return {
                ...state,
                clientsSearchLoading: true,
            }

        case SEARCH_CLIENTS:
            return {
                ...state,
                searchReturnedValueClients: payload,
                clientsList: payload,
                clientsSearchLoading: false,
            }

        case SEARCH_CLIENTS_RESET:
            return {
                ...state,
                clientsSearchLoading: false,
            }

        // Search Clients for Records
        case SEARCH_CLIENTS_FOR_RECORD_LOADING:
            return {
                ...state,
                clientsSearchForRecordLoading: payload,
            }

        case SEARCH_CLIENTS_FOR_RECORD:
            return {
                ...state,
                clientsSearchForRecordValues: payload,
            }

        // GET all CLients All
        case CLIENTS_LIST_ALL_LOADING:
            return {
                ...state,
                clientsListAllGetLoading: true,
            }
        case CLIENTS_LIST_ALL_LOADING_COMPLETE:
            return {
                ...state,
                clientsListAllGetLoading: false,
                clientsList: payload,
            }
        case CLIENTS_LIST_RESET:
            return {
                ...state,
                clientsListAllGetLoading: false,
                clientsList: [],
            }

        default:
            return state
    }
}

export default authReducer