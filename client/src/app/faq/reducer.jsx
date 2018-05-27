import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false,
    categories: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.FAQ_FETCHED:
            return { ...state, current: action.payload }

        case type.FAQS_FETCHED:
            return { ...state, data: action.payload }

        case type.FAQ_CATEGORIES_FETCHED:
            return { ...state, categories: action.payload }

        default:
            return state
    }
}
