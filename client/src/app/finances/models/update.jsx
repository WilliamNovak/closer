import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const updateFinance = (financeId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}finances/${financeId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT finance/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
