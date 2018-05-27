import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSellersIndicators } from 'module-sellers/models/get'
import View from './view'

class Index extends Component {

    constructor(props) { super(props) }

    render() {

        const {
            sellersIndicatorsUpdated,
            indicators
        } = this.props.sellers

        if (!sellersIndicatorsUpdated) {
            this.props.getSellersIndicators()
        }

        return <View indicators={indicators} />

    }
}

const mapStateToProps = state => ({
    sellers: state.sellers
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getSellersIndicators
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
