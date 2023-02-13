import {
    // Set notifications
    SET_NOTIFICATIONS,
    NOTIFICATIONS_LOADING,
    NOTIFICATIONS_UNREAD_COUNT,
    NOTIFICATION_STATUS,
    NOTIFICATIONS_COUNT_CHANGE,
} from '../../actions/types'

import {
        // System notifications
    SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS,

    // All notifications
    SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS,
} from '../../actions/settings/settings-types'

const initialState = {
    // System notifications
    systemNotifications: true,

    // All notifications
    allNotifications: true,

    // Notifications Array 
    notifications: [],

    // Loading 
    notificationsLoading: false,

    // Count 
    notificationsCount: 0
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // Notification Status to false 
        case NOTIFICATION_STATUS:
            return {
                ...state,
                notifications: state.notifications.map((element, index) =>
                    element.id === payload.id
                        ? {
                              ...element,
                              status: payload.status,
                          }
                        : element
                ),
            }
        // Change count 
        case NOTIFICATIONS_COUNT_CHANGE:
            return {
                notificationsCount: payload
            }

        // Count
        case NOTIFICATIONS_UNREAD_COUNT:
            return {
                ...state,
                notificationsCount: payload,
            }
        // Loading
        case NOTIFICATIONS_LOADING:
            return {
                ...state,
                notificationsLoading: payload,
            }
        // Set notifications
        case SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: payload,
            }
        // All notifications
        case SETTINGS_SYSTEM_CHANGE_ALL_NOTIFICATIONS:
            return {
                ...state,
                allNotifications: payload,
            }

        // System notifications
        case SETTINGS_SYSTEM_CHANGE_PLATFORM_NOTIFICATIONS:
            return {
                ...state,
                systemNotifications: payload,
            }

        default:
            return state
    }
}

export default authReducer
