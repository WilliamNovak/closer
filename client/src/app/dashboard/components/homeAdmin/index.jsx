import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toastr } from 'react-redux-toastr'
import { getHomeAdminIndicators } from '../../models/indicators'
import View from './view'

class HomeAdminContainer extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => toastr.success('Olá Admin', 'Bem vindo ao seu Painel de Controle!')

    render() {

        const {
            homeAdminIndicatorsUpdated,
            indicators,
            collections
        } = this.props.dashboard

        if (!homeAdminIndicatorsUpdated) {
            this.props.getHomeAdminIndicators()
        } else {
            return <View indicators={indicators} collections={collections} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getHomeAdminIndicators
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeAdminContainer)
