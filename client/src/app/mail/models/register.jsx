import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const registerMail = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}mails/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST mail/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
