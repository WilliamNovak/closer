import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentSeller } from 'module-sellers/actions'
import { registerSeller } from 'module-sellers/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerSeller(values)
        toastr.success('Seller cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.sellers.current) {
            this.props.setCurrentSeller(false)
        }
    }

    render() {

        const { current } = this.props.sellers

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    sellers: state.sellers
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerSeller, setCurrentSeller }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
