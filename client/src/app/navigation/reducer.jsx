import type from './types'

const INITIAL_STATE = {
    current: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.CHANGE_CURRENT_PAGE:
            return { ...state, current: action.payload }

        default:
            return state
    }
}
