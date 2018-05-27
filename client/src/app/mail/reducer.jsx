import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false,
    categories: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.MAIL_FETCHED:
            return { ...state, current: action.payload }

        case type.MAILS_FETCHED:
            return { ...state, data: action.payload }

        case type.MAIL_CATEGORIES_FETCHED:
            return { ...state, categories: action.payload }

        default:
            return state
    }
}
