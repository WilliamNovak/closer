import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Open new ticket.
 * @param payload
 */
export const registerTicket = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}supports/ticket/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST support/ticket/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
