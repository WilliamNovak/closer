import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const updateUser = (userId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}users/${userId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT user/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
