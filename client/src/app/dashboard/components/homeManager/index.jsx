import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toastr } from 'react-redux-toastr'
import { getTopSellingProducts } from '../../models/collections'
import HomeComponent from './component'

/*
 * Home Manager Container
 */
class HomeManager extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => toastr.success('Olá William', 'Bem vindo ao seu Painel de Controle!')

    render() {

        const {
            homeManagerIndicatorsUpdated,
            indicators,
            collections
        } = this.props.dashboard

        /*
         * Get indicators to display on Seller Home Page on Dashboard
         */
        if (!homeManagerIndicatorsUpdated) {
            this.props.getTopSellingProducts(true)
            this.props.getTopSellingProducts(false)
        }

        return <HomeComponent indicators={indicators} collections={collections} />

    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getTopSellingProducts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeManager)
