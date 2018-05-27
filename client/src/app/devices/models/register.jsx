import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const registerDevice = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}devices/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST device/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
