import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const updateMail = (mailId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}mails/${mailId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT mail/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
