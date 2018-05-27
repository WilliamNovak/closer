import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getOrdersIndicators } from '../../models/indicators'
import { getOrders } from '../../models/collections'

import OrdersComponent from './component'

/*
 * Orders Container
 */
class OrdersContainer extends Component {

    constructor(props) {
        super (props)
        this.state = {
        }
    }

    render() {

        const {
            ordersIndicatorsUpdated,
            indicators,
            collections
        } = this.props.dashboard

        /*
         * Get indicators to display on Orders Page on Dashboard
         */
        if (!ordersIndicatorsUpdated) {
            this.props.getOrdersIndicators()
            this.props.getOrders()
        }

        return (
            <OrdersComponent indicators={indicators} collections={collections} />
        )
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getOrdersIndicators, getOrders
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer)
