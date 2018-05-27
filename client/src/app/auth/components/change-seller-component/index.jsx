import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSellers } from 'module-sellers/models/get'
import View from './view'

class ChangeSellerComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => this.props.getSellers()

    render() => <View {...this.props.sellers} />

}

const mapStateToProps = state => ({
    sellers: state.sellers
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getSellers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSellerComponent)
