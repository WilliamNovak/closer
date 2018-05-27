import type from './types'
import { ADMIN_GUEST, USER } from './../../consts'

const INITIAL_STATE = {
    user: false,
    token: false,
    authenticated: false,
    role: ADMIN_GUEST,
    user: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.LOGGED_USER_FETCHED:
            window.sessionStorage.setItem(USER, JSON.stringify(action.payload))
            return { ...state,
                user: action.payload,
                role: action.payload.role,
                authenticated: true
            }

        case type.USER_TOKEN:
            return { ...state, token: action.payload }

        case type.USER_LOGOUT:
            return INITIAL_STATE

        default:
            return state
    }
}
