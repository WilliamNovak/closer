import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProduct } from 'module-products/models/get'
import View from './view'

class Product extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.products
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getProduct(currentId)
        }
    }

    render() {

        const { current } = this.props.products

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getProduct
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Product)
