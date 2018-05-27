import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const updateSeller = (sellerId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}sellers/${sellerId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT sellers/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
