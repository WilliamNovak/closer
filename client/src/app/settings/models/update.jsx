import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import {  } from '../actions'

/**
 * Update seller ui bu seller id.
 * @param sellerId
 * @param payload
 */
export const updateSellerUi = (sellerId = 0, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}settings/ui/${sellerId}/update`,
            data: payload
        })
        .then(
            response => alert("PUT settings/ui/29 SUCCESSFUL")
        )
        .catch(
            err => {}
        )
    }
}
