import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const registerProduct = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}products/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST product/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
