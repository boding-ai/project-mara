import {
    // Change Event list
    CHANGE_UPCOMING_EVENT_PREFIX,

    // Load upcoming elements
    LOAD_UPCOMING_EVENTS,
} from '../../actions/types'

const initialState = {
    eventList: [],
    loadUpcomingEvents: false
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // Load upcoming events
        case LOAD_UPCOMING_EVENTS:
            return {
                ...state,
                loadUpcomingEvents: payload,
            }

        // Change event prefix
        case CHANGE_UPCOMING_EVENT_PREFIX:
            return {
                ...state,
                eventList: payload,
            }

        default:
            return state
    }
}

export default authReducer
