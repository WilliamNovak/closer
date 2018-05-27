import type from './types'

export const setCurrentTicket = (payload = false) => ({
    type: type.SUPPORT_TICKET_FETCHED, payload: payload
})

export const setTickets = (payload = false) => ({
    type: type.SUPPORTS_TICKETS_FETCHED, payload: payload
})
