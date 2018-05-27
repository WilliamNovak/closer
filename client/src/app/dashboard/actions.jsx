import type from './types'

export const setIndicator = (type = null, total = false) => ({
    type: type, payload: total
})

/* HOME SELLER */
export const homeManagerIndicatorsHasUpdated = () => ({
    type: type.HOME_MANAGER_INDICATOR_UPDATED,
    payload: true
})

export const setAllTopSellingProducts = (data = false) => ({
    type: type.ALL_TOP_SELLING_FETCHED,
    payload: data
})

export const setMyTopSellingProducts = (data = false) => ({
    type: type.MY_TOP_SELLING_FETCHED,
    payload: data
})

/* HOME ADMIN */
export const homeAdminIndicatorsHasUpdated = () => ({
    type: type.HOME_ADMIN_INDICATOR_UPDATED,
    payload: true
})

/* ORDERS */

export const setOrders = (data = false) => ({
    type: type.ORDERS_FETCHED,
    payload: data
})

export const ordersIndicatorsHasUpdated = () => ({
    type: type.ORDERS_INDICATOR_UPDATED,
    payload: true
})


/* LOGISTICS */

export const setLogistics = (data = false) => ({
    type: type.LOGISTICS_FETCHED,
    payload: data
})

export const logisticsIndicatorsHasUpdated = () => ({
    type: type.LOGISTICS_INDICATOR_UPDATED,
    payload: true
})
