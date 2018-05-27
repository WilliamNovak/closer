import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false,
    logisticsIndicatorsUpdated: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.LOGISTIC_FETCHED:
            return { ...state, current: action.payload }

        case type.LOGISTICS_FETCHED:
            return { ...state, data: action.payload }

        case type.LOGISTICS_INDICATOR_UPDATED:
            return { ...state, logisticsIndicatorsUpdated: action.payload }

        default:
            return state
    }
}
