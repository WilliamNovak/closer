import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentSeller, setSellers,
    sellersIndicatorsHasUpdated,
    setSellersIndicatorTop,
    setCurrentSellerKeyAccount } from '../actions'

/**
 * Get seller data by id.
 * @param sellerId
 */
export function getSeller(sellerId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}sellers/${sellerId}`
        })
        .then(
            response => dispatch(setCurrentSeller(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get sellers data.
 */
export function getSellers() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}sellers`
        })
        .then(
            response => dispatch(setSellers(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Get all indicators to view on Logistics Page.
 */
export function getSellersIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}sellers/indicators`
        })
        .then(
            response => {
                let indicatorData = response.data.data[0]
                dispatch([
                    sellersIndicatorsHasUpdated(),
                    setSellersIndicatorTop(indicatorData.top)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}



/**
 * Get seller data by id.
 * @param sellerId
 */
export function getSellerKeyAccount(sellerId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}sellers/${sellerId}/key-account`
        })
        .then(
            response => dispatch(setCurrentSellerKeyAccount(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}
