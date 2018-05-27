import type from './types'

const INITIAL_STATE = {

    /* Page Update Indicators */
    homeManagerIndicatorsUpdated: false,
    homeAdminIndicatorsUpdated: false,
    ordersIndicatorsUpdated: false,
    logisticsIndicatorsUpdated: false,

    /* Indicators */
    indicators: {
        /*
         * Home
         */
        catalog: 0,
        priced: 0,
        billed: 0,
        orders: 0,
        markup: 0,

        /*
         * Admin
         */
        adminSellers: 0,
        adminPriced: 0,
        adminCatalog: 0,
        adminOrder: 0,
        adminMarkup: 0,
        adminInvoiced: 0,
        adminBilled: 0,
        adminRecipe: 0,
        adminExpenses: 0,

        adminTransportShipped: 0,
        adminTransportOrigin: 0,
        adminTransportReceiver: 0,
        adminTransportInTransport: 0,
        adminTransportDelivered: 0,

        adminOrdersCanceled: 0,
        adminOrdersDelivered: 0,
        adminOrdersLate: 0,
        adminOrdersNew: 0,
        adminOrdersPending: 0,

        /*
         * Orders
         */
        ordersCanceled: 0,
        ordersDelivered: 0,
        ordersLate: 0,
        ordersNew: 0,
        ordersPending: 0,

        /*
         * Logistcs
         */
        logisticsDelivered: 0,
        logisticsNew: 0,
        logisticsLate: 0,
        logisticsTransportShipped: 0,
        logisticsTransportOrigin: 0,
        logisticsTransportReceiver: 0,
        logisticsTransportInTransport: 0,
        logisticsTransportDelivered: 0
    },

    /* Top Selling Products for Home Page */
    collections: {
        allTopSellingProducts: false,
        myTopSellingProducts: false,
        orders: false,
        logistics: false
    }

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // Update home of admin indicator lock var.
        case type.HOME_ADMIN_INDICATOR_UPDATED:
            return { ...state, homeAdminIndicatorsUpdated: action.payload }

        // Update admin catalog indicator.
        case type.ADMIN_CATALOG_INDICATOR:
            state.indicators.adminCatalog = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin priced indicator.
        case type.ADMIN_PRICED_INDICATOR:
            state.indicators.adminPriced = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin billed indicator.
        case type.ADMIN_BILLED_INDICATOR:
            state.indicators.adminBilled = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin order indicator.
        case type.ADMIN_ORDER_INDICATOR:
            state.indicators.adminOrder = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin markup indicator.
        case type.ADMIN_MARKUP_INDICATOR:
            state.indicators.adminMarkup = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin markup indicator.
        case type.ADMIN_INVOICED_INDICATOR:
            state.indicators.adminInvoiced = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin recipes indicator.
        case type.ADMIN_RECIPE_INDICATOR:
            state.indicators.adminRecipe = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin expenses indicator.
        case type.ADMIN_EXPENSES_INDICATOR:
            state.indicators.adminExpenses = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin sellers indicator.
        case type.ADMIN_SELLERS_INDICATOR:
            state.indicators.adminSellers = action.payload
            return { ...state, indicators: state.indicators }

        // Update admin transport shipped indicator.
        case type.ADMIN_TRANSPORT_SHIPPED_INDICATOR:
            state.indicators.adminTransportShipped = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin transport origin indicator.
        case type.ADMIN_TRANSPORT_ORIGIN_INDICATOR:
            state.indicators.adminTransportOrigin = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin transport receiver indicator.
        case type.ADMIN_TRANSPORT_RECEIVER_INDICATOR:
            state.indicators.adminTransportReceiver = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin transport in transport indicator.
        case type.ADMIN_TRANSPORT_IN_TRANSPORT_INDICATOR:
            state.indicators.adminTransportInTransport = action.payload
            return { ...state, indicators: state.indicators }
        // Update admin transport delivered indicator.
        case type.ADMIN_TRANSPORT_DELIVERED_INDICATOR:
            state.indicators.adminTransportDelivered = action.payload
            return { ...state, indicators: state.indicators }

        // Update adminOrders approved indicator.
        case type.ADMIN_ORDERS_CANCELED_INDICATOR:
            state.indicators.adminOrdersCanceled = action.payload
            return { ...state, indicators: state.indicators }
        // Update adminOrders delivered indicator.
        case type.ADMIN_ORDERS_DELIVERED_INDICATOR:
            state.indicators.adminOrdersDelivered = action.payload
            return { ...state, indicators: state.indicators }
        // Update adminOrders categories indicator.
        case type.ADMIN_ORDERS_LATE_INDICATOR:
            state.indicators.adminOrdersLate = action.payload
            return { ...state, indicators: state.indicators }
        // Update adminOrders new indicator.
        case type.ADMIN_ORDERS_NEW_INDICATOR:
            state.indicators.adminOrdersNew = action.payload
            return { ...state, indicators: state.indicators }
        // Update adminOrders sold indicator.
        case type.ADMIN_ORDERS_PENDING_INDICATOR:
            state.indicators.adminOrdersPending = action.payload
            return { ...state, indicators: state.indicators }

        /*
         * HOME
         */

        // Update home of seller indicator lock var.
        case type.HOME_MANAGER_INDICATOR_UPDATED:
            return { ...state, homeManagerIndicatorsUpdated: action.payload }

        // Update catalog indicator.
        case type.CATALOG_INDICATOR:
            state.indicators.catalog = action.payload
            return { ...state, indicators: state.indicators }

        // Update priced indicator.
        case type.PRICED_INDICATOR:
            state.indicators.priced = action.payload
            return { ...state, indicators: state.indicators }

        // Update billed indicator.
        case type.BILLED_INDICATOR:
            state.indicators.billed = action.payload
            return { ...state, indicators: state.indicators }

        // Update order indicator.
        case type.ORDER_INDICATOR:
            state.indicators.order = action.payload
            return { ...state, indicators: state.indicators }

        // Update markup indicator.
        case type.MARKUP_INDICATOR:
            state.indicators.markup = action.payload
            return { ...state, indicators: state.indicators }

        // Set top selling products.
        case type.ALL_TOP_SELLING_FETCHED:
            state.collections.allTopSellingProducts = action.payload
            return { ...state, collections: state.collections }

        // Set seller top selling products.
        case type.MY_TOP_SELLING_FETCHED:
            state.collections.myTopSellingProducts = action.payload
            return { ...state, collections: state.collections }



        /*
         * ORDERS
         */

        // Update home indicator lock var.
        case type.ORDERS_INDICATOR_UPDATED:
            return { ...state, ordersIndicatorsUpdated: action.payload }

        // Update orders approved indicator.
        case type.ORDERS_CANCELED_INDICATOR:
            state.indicators.ordersCanceled = action.payload
            return { ...state, indicators: state.indicators }
        // Update orders delivered indicator.
        case type.ORDERS_DELIVERED_INDICATOR:
            state.indicators.ordersDelivered = action.payload
            return { ...state, indicators: state.indicators }
        // Update orders categories indicator.
        case type.ORDERS_LATE_INDICATOR:
            state.indicators.ordersLate = action.payload
            return { ...state, indicators: state.indicators }
        // Update orders new indicator.
        case type.ORDERS_NEW_INDICATOR:
            state.indicators.ordersNew = action.payload
            return { ...state, indicators: state.indicators }
        // Update orders sold indicator.
        case type.ORDERS_PENDING_INDICATOR:
            state.indicators.ordersPending = action.payload
            return { ...state, indicators: state.indicators }
        // Set orders.
        case type.ORDERS_FETCHED:
            state.collections.orders = action.payload
            return { ...state, collections: state.collections }

        /*
         * LOGISTICS
         */

        // Update logistics indicator lock var.
        case type.LOGISTICS_INDICATOR_UPDATED:
            return { ...state, logisticsIndicatorsUpdated: action.payload }

        // Update logistics delivered indicator.
        case type.LOGISTICS_DELIVERED_INDICATOR:
            state.indicators.logisticsDelivered = action.payload
            return { ...state, indicators: state.indicators }

        // Update logistics new indicator.
        case type.LOGISTICS_NEW_INDICATOR:
            state.indicators.logisticsNew = action.payload
            return { ...state, indicators: state.indicators }

        // Update logistics late indicator.
        case type.LOGISTICS_LATE_INDICATOR:
            state.indicators.logisticsLate = action.payload
            return { ...state, indicators: state.indicators }

        // Update logistics transport shipped indicator.
        case type.LOGISTICS_TRANSPORT_SHIPPED_INDICATOR:
            state.indicators.logisticsTransportShipped = action.payload
            return { ...state, indicators: state.indicators }

        // Update logistics transport origin indicator.
        case type.LOGISTICS_TRANSPORT_ORIGIN_INDICATOR:
            state.indicators.logisticsTransportOrigin = action.payload
            return { ...state, indicators: state.indicators }

        // Update logistics transport receiver indicator.
        case type.LOGISTICS_TRANSPORT_RECEIVER_INDICATOR:
            state.indicators.logisticsTransportReceiver = action.payload
            return { ...state, indicators: state.indicators }

        // Update logistics transport in transport indicator.
        case type.LOGISTICS_TRANSPORT_IN_TRANSPORT_INDICATOR:
            state.indicators.logisticsTransportInTransport = action.payload
            return { ...state, indicators: state.indicators }

        // Update logistics transport delivered indicator.
        case type.LOGISTICS_TRANSPORT_DELIVERED_INDICATOR:
            state.indicators.logisticsTransportDelivered = action.payload
            return { ...state, indicators: state.indicators }

        // Set logistics.
        case type.LOGISTICS_FETCHED:
            state.collections.logistics = action.payload
            return { ...state, collections: state.collections }


        default:
            return state
    }
}
