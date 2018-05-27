import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const updateDevice = (deviceId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}devices/${deviceId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT device/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
