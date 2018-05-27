import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import {
    setAllTopSellingProducts, setMyTopSellingProducts,
    setCatalog,
    setOrders,
    setCampaigns,
    setFinances,
    setLogistics,
    setSellers
} from '../actions'

/**
 * Get top selling products.
 * @param all (bool)
 */
export function getTopSellingProducts(all = true) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}collections/product-top-selling` + ( all ? '' : '/me')
        })
        .then(
            response => {
                let productsData = response.data.data
                dispatch(
                    all === true
                    ? setAllTopSellingProducts(productsData)
                    : setMyTopSellingProducts(productsData)
                )
            }
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get catalog produtcs collection.
 */
export function getCatalog() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}collections/catalog`
        })
        .then(
            response => {
                dispatch(setCatalog(response.data.data))
            }
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Get catalog produtcs collection.
 */
export function getOrders() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}collections/orders`
        })
        .then(
            response => {
                dispatch(setOrders(response.data.data))
            }
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Get campaigns collection.
 */
export function getCampaigns() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}collections/campaigns`
        })
        .then(
            response => {
                dispatch(setCampaigns(response.data.data))
            }
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Get finances collection.
 */
export function getFinances() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}collections/finances`
        })
        .then(
            response => {
                dispatch(setFinances(response.data.data))
            }
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get logistics collection.
 */
export function getLogistics() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}collections/logistics`
        })
        .then(
            response => {
                dispatch(setLogistics(response.data.data))
            }
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get logistics collection.
 */
export function getSellers() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}sellers`
        })
        .then(
            response => {
                dispatch(setSellers(response.data.data))
            }
        )
        .catch(
            err => {}
        )
    }
}
