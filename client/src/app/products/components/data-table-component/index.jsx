import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProducts } from 'module-products/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.products.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getProducts()
    }

    setSelectedProducts = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.products

        if (data) {
            return <DataTable setSelectedProducts={this.setSelectedProducts} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getProducts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
