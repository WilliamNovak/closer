import type from 'application/modules/auth/types'
import { GUEST_ROLE } from 'constants'

const INITIAL_STATE = {
    user: false,
    authenticated: false,
    role: GUEST_ROLE
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.AUTH_USER_WAS_SIGNED_IN:
            return { ...state, user: action.payload, authenticated: true }

        case type.AUTH_USER_SIGNED_IN_ROLE_WAS_SETTED:
            return { ...state, role: action.payload }

        case type.AUTH_USER_WAS_SIGNED_OUT:
            return INITIAL_STATE

        default:
            return state
    }
}
