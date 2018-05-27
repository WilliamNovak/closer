import type from './types'

const INITIAL_STATE = {
    order: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // Set order.
        case type.ORDER_FETCHED:
            return { ...state, order: action.payload }

        default:
            return state
    }
}
