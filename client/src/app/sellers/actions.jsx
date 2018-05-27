import type from './types'

export const setCurrentSeller = (payload = false) => ({
    type: type.SELLER_FETCHED, payload: payload
})

export const setSellers = (payload = false) => ({
    type: type.SELLERS_FETCHED, payload: payload
})

export const sellersIndicatorsHasUpdated = () => ({
    type: type.SELLERS_INDICATOR_UPDATED,
    payload: true
})

export const setSellersIndicatorTop = (indicators = false) => ({
    type: type.SELLERS_TOP_INDICATOR,
    payload: indicators
})

export const setCurrentSellerKeyAccount = (payload = false) => ({
    type: type.SELLER_KEY_ACCOUNT_FETCHED, payload: payload
})
