import type from './types'

export const setUserIndicator = (type = null, payload = false) => ({
    type: type, payload: payload
})

export const setCurrentUser = (payload = false) => ({
    type: type.USER_FETCHED, payload: payload
})

export const setUsers = (payload = false) => ({
    type: type.USERS_FETCHED, payload: payload
})

export const usersIndicatorsHasUpdated = () => ({
    type: type.USERS_INDICATOR_UPDATED,
    payload: true
})
