import type from './types'

export const setCurrentLogistic = (payload = false) => ({
    type: type.LOGISTIC_FETCHED, payload: payload
})

export const setLogistics = (payload = false) => ({
    type: type.LOGISTICS_FETCHED, payload: payload
})

export const logisticsIndicatorsHasUpdated = () => ({
    type: type.LOGISTICS_INDICATOR_UPDATED,
    payload: true
})
