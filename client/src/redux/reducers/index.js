import { combineReducers } from 'redux'
import { withReduxStateSync } from 'redux-state-sync'

import {
    LOGOUT
} from '../actions/types'

import auth from './auth/auth'
import snackbar from './snackbar/snackbar'
import clients from './clients/clients'
import add from './add-array/add-array'
import sidebar from './sidebar/sidebar'
import metrics from './metrics/metrics'
import profiles from './profiles/profiles'
import social from './business/social'
import notifications from './notifications/notifications'
import store from './store/store'
import upcoming from './upcoming/upcoming'

const mainReducer = combineReducers({
    auth,
    snackbar,
    clients,
    add,
    sidebar,
    metrics,
    profiles,
    social,
    notifications,
    store,
    upcoming,
})

const rootReducer = (state, action) => {
    
    // Delete complete state if logged out
    if (action.type === LOGOUT) {
        state = undefined
    }
    return mainReducer(state, action)
}

export default withReduxStateSync(rootReducer)