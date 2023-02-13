import {
    SNACKBAR_RESET,
    ERROR_400,
    ERROR_401,
    ERROR_500,
    ERROR_SOMETHING_ELSE,
    SUCCESS_200,
} from '../../actions/types'

import { nanoid } from 'nanoid'

const initialState = {
    message: "",
    type: 'info',
    key: ''
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case ERROR_400:
        case ERROR_401:
        case ERROR_500:
        case ERROR_SOMETHING_ELSE:
        case SUCCESS_200:
            return {
                ...state,
                message: payload.message,
                type: payload.type,
                key: nanoid()
            }
        case SNACKBAR_RESET:
            return {
                ...state,
                message: '',
                key: ''
            }

        default:
            return state
    }
}
// .
export default authReducer
