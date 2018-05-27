import type from './types'

export const setCurrentSellerUi = (payload = false) => ({
    type: type.SETTINGS_SELLER_UI_FETCHED,
    payload: payload
})
