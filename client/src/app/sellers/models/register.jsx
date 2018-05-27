import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const registerSeller = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}sellers/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST sellers/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
