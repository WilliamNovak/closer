import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const updateProduct = (productId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}products/${productId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT product/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
