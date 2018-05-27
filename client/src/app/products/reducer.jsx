import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false,
    catalogIndicatorsUpdated: false,
    indicators: {
        approved: 0,
        delivered: 0,
        new: 0,
        sold: 0
    },
    topSelling: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.PRODUCT_FETCHED:
            return { ...state, current: action.payload }

        case type.PRODUCTS_FETCHED:
            return { ...state, data: action.payload }

        /*
         * INDICATORS
         */

        case type.CATALOG_INDICATOR_UPDATED:
            return { ...state, catalogIndicatorsUpdated: action.payload }

        case type.CATALOG_APPROVED_INDICATOR:
            state.indicators.approved = action.payload
            return { ...state, indicators: state.indicators }

        case type.CATALOG_CATEGORIES_INDICATOR:
            state.indicators.catalogCategories = action.payload
            return { ...state, indicators: state.indicators }

        case type.CATALOG_DELIVERED_INDICATOR:
            state.indicators.delivered = action.payload
            return { ...state, indicators: state.indicators }

        case type.CATALOG_NEW_INDICATOR:
            state.indicators.new = action.payload
            return { ...state, indicators: state.indicators }

        case type.CATALOG_SOLD_INDICATOR:
            state.indicators.sold = action.payload
            return { ...state, indicators: state.indicators }

        case type.PRODUCTS_TOP_SELLING:
            return { ...state, topSelling: action.payload }

        default:
            return state
    }
}
