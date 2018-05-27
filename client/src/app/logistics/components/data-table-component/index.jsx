import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLogistics } from 'module-logistics/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.logistics.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getLogistics()
    }

    setSelectedLogistics = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.logistics

        if (data) {
            return <DataTable setSelectedLogistics={this.setSelectedLogistics} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    logistics: state.logistics
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getLogistics
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
