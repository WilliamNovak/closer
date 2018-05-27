import type from './types'

export const setOrder = (payload = false) => ({
    type: type.ORDER_FETCHED, payload: payload
})
