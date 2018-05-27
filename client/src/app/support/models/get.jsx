import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentTicket, setTickets } from '../actions'

/**
 * Get ticket data by id.
 * @param ticketId
 */
export function getTicket(ticketId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}supports/tickets/${ticketId}`
        })
        .then(
            response => dispatch(setCurrentTicket(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get tickets.
 * @param ticketId
 */
export function getTickets(filter = false) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}supports/tickets`
        })
        .then(
            response => dispatch(setTickets(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}
