import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getLogisticsIndicators } from '../../models/indicators'
import { getLogistics } from '../../models/collections'

import LogisticsComponent from './component'

/*
 * Logistics Container
 */
class LogisticsContainer extends Component {

    constructor(props) {
        super (props)
        this.state = {
        }
    }

    render() {

        const {
            logisticsIndicatorsUpdated,
            indicators,
            collections
        } = this.props.dashboard

        /*
         * Get indicators to display on Logistics Page on Dashboard
         */
        if (!logisticsIndicatorsUpdated) {
            this.props.getLogisticsIndicators()
            this.props.getLogistics()
        }

        return (
            <LogisticsComponent indicators={indicators} collections={collections} />
        )
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getLogisticsIndicators, getLogistics
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LogisticsContainer)
