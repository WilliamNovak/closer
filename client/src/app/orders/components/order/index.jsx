import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOrder } from '../../models/get'
import OrderComponent from './component'

/*
 * Order Container
 */
class OrderContainer extends Component {

    constructor(props) {
        super (props)
        this.state = {
        }
    }

    render() {

        const {
            order
        } = this.props.orders

        /*
         * Get order by param id (route).
         */
        if (!order) {
            this.props.getOrder(this.props.params.id)
            return (
                <div>
                    Carregando...
                </div>
            )
        }

        return (
            <OrderComponent {...order} />
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getOrder
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)
