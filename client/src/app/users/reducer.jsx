import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false,
    usersIndicatorsUpdated: false,
    indicators: {
        total: 0
    }

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.USER_FETCHED:
            return { ...state, current: action.payload }

        case type.USERS_FETCHED:
            return { ...state, data: action.payload }

        /*
         * INDICATORS
         */

        case type.USERS_INDICATOR_UPDATED:
            return { ...state, usersIndicatorsUpdated: action.payload }

        case type.USERS_TOTAL_INDICATOR:
            state.indicators.total = action.payload
            return { ...state, indicators: state.indicators }

        default:
            return state
    }
}
