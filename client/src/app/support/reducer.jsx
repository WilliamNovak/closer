import type from './types'

const INITIAL_STATE = {
    currentTicket: false,
    tickets: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.SUPPORT_TICKET_FETCHED:
            return { ...state, currentTicket: action.payload }

        case type.SUPPORTS_TICKETS_FETCHED:
            return { ...state, tickets: action.payload }

        default:
            return state
    }
}
