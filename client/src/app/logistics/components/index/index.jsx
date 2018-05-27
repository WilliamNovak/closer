import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLogisticsIndicators } from 'module-logistics/models/get'
import View from './view'

class Index extends Component {

    constructor(props) { super(props) }

    render() {

        const {
            logisticsIndicatorsUpdated,
            indicators
        } = this.props.logistics

        if (!logisticsIndicatorsUpdated) {
            this.props.getLogisticsIndicators()
        }

        return <View indicators={indicators} />

    }
}

const mapStateToProps = state => ({
    logistics: state.logistics
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getLogisticsIndicators
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
