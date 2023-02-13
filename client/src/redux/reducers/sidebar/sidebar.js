import {
    // Sidebar
    MOUSE_ENTER,
    MOUSE_LEAVE,
    ENABLE_HOVER,
    DISABLE_HOVER,
    HOVER_INIT,

    // Rightbar
    EXPAND_RIGHTBAR,
    DEFLATE_RIGHTBAR,
    IS_MOUNTED_RIGHTBAR
} from '../../actions/types'
//
const initialState = {
    hover: false,
    hoverDisabled: false,
    hoverDisabledNativeSetting: false,

    expandRightbar: false,
    isMountedRightbar: false
}

function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // Control mounting 
        case IS_MOUNTED_RIGHTBAR:
            return {
                ...state,
                isMountedRightbar: payload
            }
        // Rightbar expand
        case EXPAND_RIGHTBAR:
            return {
                ...state,
                expandRightbar: true,
            }
            
        // Rightbar deflate
        case DEFLATE_RIGHTBAR:
            return {
                ...state,
                expandRightbar: false,
            }
        // Hover settings change
        case HOVER_INIT:
            return {
                ...state,
                hoverDisabled: payload,
                hoverDisabledNativeSetting: payload,
            }
        case ENABLE_HOVER:
            return {
                ...state,
                hoverDisabled: true,
            }
        case DISABLE_HOVER:
            return {
                ...state,
                hoverDisabled: false,
            }

        case MOUSE_ENTER:
            return {
                ...state,
                hover: true,
            }
        case MOUSE_LEAVE:
            return {
                ...state,
                hover: false,
            }
        default:
            return state
    }
}

export default authReducer
