import type from './types'

export const setCatalogIndicator = (type = null, payload = false) => ({
    type: type, payload: payload
})

export const setCurrentProduct = (payload = false) => ({
    type: type.PRODUCT_FETCHED, payload: payload
})

export const setProducts = (payload = false) => ({
    type: type.PRODUCTS_FETCHED, payload: payload
})

export const catalogIndicatorsHasUpdated = () => ({
    type: type.CATALOG_INDICATOR_UPDATED,
    payload: true
})


export const setProductsTopSelling = (payload = false) => ({
    type: type.PRODUCTS_TOP_SELLING,
    payload: payload
})
