import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFinances } from 'module-finances/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.finances.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getFinances()
    }

    setSelectedFinances = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.finances

        if (data) {
            return <DataTable setSelectedFinances={this.setSelectedFinances} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    finances: state.finances
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getFinances
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
