import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import {
    setCurrentProduct, setProducts, setCatalogIndicator,
    catalogIndicatorsHasUpdated, setProductsTopSelling } from '../actions'

/**
 * Get seller data by id.
 * @param productId
 */
export function getProduct(productId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}products/${productId}`
        })
        .then(
            response => dispatch(setCurrentProduct(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get product data.
 */
export function getProducts() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}products`
        })
        .then(
            response => dispatch(setProducts(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}



/**
 * Get all indicators to view on Catalog Page.
 */
export function getCatalogIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}products/indicators`
        })
        .then(
            response => {
                let i = response.data.data[0]
                dispatch([
                    catalogIndicatorsHasUpdated(),
                    setCatalogIndicator(type.CATALOG_SOLD_INDICATOR, i.sold),
                    setCatalogIndicator(type.CATALOG_NEW_INDICATOR, i.new),
                    setCatalogIndicator(type.CATALOG_DELIVERED_INDICATOR, i.delivered),
                    setCatalogIndicator(type.CATALOG_APPROVED_INDICATOR, i.approved)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Get product top selling data.
 */
export function getTopSelling() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}products/top-selling`
        })
        .then(
            response => dispatch(setProductsTopSelling(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}
