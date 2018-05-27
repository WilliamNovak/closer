import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false,
    ka: false,
    sellersIndicatorsUpdated: false,
    indicators: {
        top: false
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.SELLER_FETCHED:
            return { ...state, current: action.payload }

        case type.SELLER_KEY_ACCOUNT_FETCHED:
            return { ...state, ka: action.payload }

        case type.SELLERS_FETCHED:
            return { ...state, data: action.payload }

        case type.SELLERS_INDICATOR_UPDATED:
            return { ...state, sellersIndicatorsUpdated: action.payload }

        case type.SELLERS_TOP_INDICATOR:
            let indicators = state.indicators
            indicators.top = action.payload

            return { ...state, indicators: indicators }


        default:
            return state
    }
}
