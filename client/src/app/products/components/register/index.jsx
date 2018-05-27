import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentProduct } from 'module-products/actions'
import { registerProduct } from 'module-products/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerProduct(values)
        toastr.success('Product cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.products.current) {
            this.props.setCurrentProduct(false)
        }
    }

    render() {

        const { current } = this.props.products

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    products: state.products
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerProduct, setCurrentProduct }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
