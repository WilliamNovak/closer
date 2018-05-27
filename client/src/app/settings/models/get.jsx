import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentSellerUi } from '../actions'

/**
 * Get seller ui data.
 * @param sellerId
 */
export const getSellerUi = (sellerId = 0) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}settings/ui/${sellerId}`
        })
        .then(
            response => {
                let sellerUi = response.data.data[0]
                dispatch(setCurrentSellerUi(sellerUi))
            }
        )
        .catch(
            err => {}
        )
    }
}
