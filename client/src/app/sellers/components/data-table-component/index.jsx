import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSellers } from 'module-sellers/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.sellers.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getSellers()
    }

    setSelectedSellers = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.sellers

        if (data) {
            return <DataTable setSelectedSellers={this.setSelectedSellers} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    sellers: state.sellers
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getSellers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
