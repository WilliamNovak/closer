import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setOrder } from '../actions'

/**
 * Get order data by id.
 * @param orderId
 */
export function getOrder(orderId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}orders/${orderId}`
        })
        .then(
            response => dispatch(setOrder(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}
