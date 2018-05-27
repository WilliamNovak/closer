import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Update opened ticket.
 * @param payload
 */
export const updateTicket = (supportId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}supports/ticket/${supportId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT support/ticket/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
