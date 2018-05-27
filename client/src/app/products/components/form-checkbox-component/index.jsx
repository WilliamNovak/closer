import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProducts } from 'module-products/models/get'
import Checkboxes from './checkbox'

class FormCheckboxComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.products.data) {
            this.refresh()
        }
    }

    refresh = () => this.props.getProducts()

    render() {

        const { data } = this.props.products

        if (data) {
            return <Checkboxes data={data} {...this.props} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getProducts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormCheckboxComponent)
