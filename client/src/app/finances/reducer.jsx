import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false,
    financesIndicatorsUpdated: false,
    indicators: {
        profit: 0
    }

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.FINANCE_FETCHED:
            return { ...state, current: action.payload }

        case type.FINANCES_FETCHED:
            return { ...state, data: action.payload }

        /*
         * INDICATORS
         */

        case type.FINANCES_INDICATOR_UPDATED:
            return { ...state, financesIndicatorsUpdated: action.payload }

        case type.FINANCES_PROFIT_INDICATOR:
            state.indicators.profit = action.payload
            return { ...state, indicators: state.indicators }

        default:
            return state
    }
}
