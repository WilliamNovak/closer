import type from './types'

export const setTemplate = (payload = false) => ({
    type: type.CHANGE_TEMPLATE, payload: payload
})
