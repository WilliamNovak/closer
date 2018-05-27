import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // Set current seller.
        case type.CAMPAIGN_FETCHED:
            return { ...state, current: action.payload }

        // Set campaign.
        case type.CAMPAIGNS_FETCHED:
            return { ...state, data: action.payload }
        default:
            return state
    }
}
