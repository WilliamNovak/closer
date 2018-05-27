import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const registerUser = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}users/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST user/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
