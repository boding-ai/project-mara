import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
    createStateSyncMiddleware,
    initStateWithPrevTab,
} from 'redux-state-sync'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './redux/reducers'

const persistConfig = {
    key: 'root',
    whitelist: ['auth'],
    storage,
}

const syncConfig = {
    blacklist: ['persist/PERSIST', 'persist/REHYDRATE'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState = {}

const middleware = [thunk, createStateSyncMiddleware(syncConfig)]

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

initStateWithPrevTab(store)

export default store
