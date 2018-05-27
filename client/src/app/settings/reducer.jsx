import type from './types'

const INITIAL_STATE = {
    sellerUi: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.SETTINGS_SELLER_UI_FETCHED:
            return { ...state, sellerUi: action.payload }

        default:
            return state
    }
}
