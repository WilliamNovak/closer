import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import View from './view'
import { getCatalogIndicators, getTopSelling } from 'module-products/models/get'

class Index extends Component {

    constructor(props) { super(props) }

    render() {

        const {
            catalogIndicatorsUpdated,
            indicators,
            topSelling
        } = this.props.products

        if (!catalogIndicatorsUpdated) {
            this.props.getCatalogIndicators()
            this.props.getTopSelling()
        }

        return <View topSelling={topSelling} indicators={indicators} />

    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCatalogIndicators, getTopSelling
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
