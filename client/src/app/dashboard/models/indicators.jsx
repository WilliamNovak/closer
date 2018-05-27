import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { indicatorRequest } from '../operators'
import {
    setIndicator,
    homeManagerIndicatorsHasUpdated,
    homeAdminIndicatorsHasUpdated,
    catalogIndicatorsHasUpdated,
    ordersIndicatorsHasUpdated,
    campaignsIndicatorsHasUpdated,
    financesIndicatorsHasUpdated,
    logisticsIndicatorsHasUpdated,
    sellersIndicatorsHasUpdated
} from '../actions'

/**
 * Get all indicators to view on Home Page.
 */
export function getHomeManagerIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}indicators/home`
        })
        .then(
            response => {
                let indicatorData = response.data.data[0]
                dispatch([
                    homeManagerIndicatorsHasUpdated(),
                    setIndicator(type.CATALOG_INDICATOR, indicatorData.catalog),
                    setIndicator(type.PRICED_INDICATOR, indicatorData.priced),
                    setIndicator(type.BILLED_INDICATOR, indicatorData.billed),
                    setIndicator(type.ORDER_INDICATOR, indicatorData.order),
                    setIndicator(type.MARKUP_INDICATOR, indicatorData.markup)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get all indicators to view on Home Page.
 */
export function getHomeAdminIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}indicators/home/admin`
        })
        .then(
            response => {

                let i = response.data.data[0]
                let o = i.orders
                let t = i.transport

                dispatch([
                    homeAdminIndicatorsHasUpdated(),

                    /* Indexes */
                    setIndicator(type.ADMIN_CATALOG_INDICATOR, i.catalog),
                    setIndicator(type.ADMIN_PRICED_INDICATOR, i.priced),
                    setIndicator(type.ADMIN_BILLED_INDICATOR, i.billed),
                    setIndicator(type.ADMIN_ORDER_INDICATOR, i.order),
                    setIndicator(type.ADMIN_MARKUP_INDICATOR, i.markup),
                    setIndicator(type.ADMIN_INVOICED_INDICATOR, i.invoiced),
                    setIndicator(type.ADMIN_SELLERS_INDICATOR, i.sellers),
                    setIndicator(type.ADMIN_RECIPE_INDICATOR, i.recipe),
                    setIndicator(type.ADMIN_EXPENSES_INDICATOR, i.expenses),

                    /* Order */
                    setIndicator(type.ADMIN_ORDERS_CANCELED_INDICATOR, o.canceled),
                    setIndicator(type.ADMIN_ORDERS_DELIVERED_INDICATOR, o.delivered),
                    setIndicator(type.ADMIN_ORDERS_LATE_INDICATOR, o.late),
                    setIndicator(type.ADMIN_ORDERS_NEW_INDICATOR, o.new),
                    setIndicator(type.ADMIN_ORDERS_PENDING_INDICATOR, o.pending),

                    /* Logistics */
                    setIndicator(type.ADMIN_TRANSPORT_SHIPPED_INDICATOR, t.shipped),
                    setIndicator(type.ADMIN_TRANSPORT_ORIGIN_INDICATOR, t.origin),
                    setIndicator(type.ADMIN_TRANSPORT_RECEIVER_INDICATOR, t.receiver),
                    setIndicator(type.ADMIN_TRANSPORT_IN_TRANSPORT_INDICATOR, t.inTransport),
                    setIndicator(type.ADMIN_TRANSPORT_DELIVERED_INDICATOR, t.delivered)

                ])
            }
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Get all indicators to view on Orders Page.
 */
export function getOrdersIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}indicators/orders`
        })
        .then(
            response => {
                let indicatorData = response.data.data[0]
                dispatch([
                    ordersIndicatorsHasUpdated(),
                    setIndicator(type.ORDERS_CANCELED_INDICATOR, indicatorData.canceled),
                    setIndicator(type.ORDERS_DELIVERED_INDICATOR, indicatorData.delivered),
                    setIndicator(type.ORDERS_LATE_INDICATOR, indicatorData.late),
                    setIndicator(type.ORDERS_NEW_INDICATOR, indicatorData.new),
                    setIndicator(type.ORDERS_PENDING_INDICATOR, indicatorData.pending)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get all indicators to view on Campaigns Page.
 */
export function getCampaignsIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}indicators/campaigns`
        })
        .then(
            response => {
                let indicatorData = response.data.data[0]
                dispatch([
                    campaignsIndicatorsHasUpdated()
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Get all indicators to view on Finances Page.
 */
export function getFinancesIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}indicators/finances`
        })
        .then(
            response => {
                let indicatorData = response.data.data[0]
                dispatch([
                    financesIndicatorsHasUpdated(),
                    setIndicator(type.FINANCES_PROFIT_INDICATOR, indicatorData.profit)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get all indicators to view on Logistics Page.
 */
export function getLogisticsIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}indicators/logistics`
        })
        .then(
            response => {
                let indicatorData = response.data.data[0]
                dispatch([
                    logisticsIndicatorsHasUpdated(),
                    setIndicator(type.LOGISTICS_DELIVERED_INDICATOR, indicatorData.delivered),
                    setIndicator(type.LOGISTICS_LATE_INDICATOR, indicatorData.late),
                    setIndicator(type.LOGISTICS_NEW_INDICATOR, indicatorData.new),
                    setIndicator(type.LOGISTICS_TRANSPORT_SHIPPED_INDICATOR, indicatorData.transportShipped),
                    setIndicator(type.LOGISTICS_TRANSPORT_ORIGIN_INDICATOR, indicatorData.transportOrigin),
                    setIndicator(type.LOGISTICS_TRANSPORT_RECEIVER_INDICATOR, indicatorData.transportReceiver),
                    setIndicator(type.LOGISTICS_TRANSPORT_IN_TRANSPORT_INDICATOR, indicatorData.transportInTransport),
                    setIndicator(type.LOGISTICS_TRANSPORT_DELIVERED_INDICATOR, indicatorData.transportDelivered)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}
