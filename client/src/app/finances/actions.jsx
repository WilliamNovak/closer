import type from './types'

export const setFinanceIndicator = (type = null, payload = false) => ({
    type: type, payload: payload
})

export const setCurrentFinance = (payload = false) => ({
    type: type.FINANCE_FETCHED, payload: payload
})

export const setFinances = (payload = false) => ({
    type: type.FINANCES_FETCHED, payload: payload
})

export const financesIndicatorsHasUpdated = () => ({
    type: type.FINANCES_INDICATOR_UPDATED,
    payload: true
})
