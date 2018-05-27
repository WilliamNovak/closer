import type from './types'

export const setCurrentPage = (payload = false) => ({
    type: type.CHANGE_CURRENT_PAGE, payload: payload
})
