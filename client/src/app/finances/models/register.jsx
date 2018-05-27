import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const registerFinance = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}finances/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST finance/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
