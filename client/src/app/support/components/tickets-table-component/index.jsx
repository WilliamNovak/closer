import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTickets } from 'module-support/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.support.tickets) {
            this.refresh()
        }
    }

    refresh = () => this.props.getTickets()

    setSelectedTicket = (collection) => console.log(collection)

    render() {

        const { tickets } = this.props.support

        if (tickets) {
            return <DataTable setSelectedTicket={this.setSelectedTicket} data={tickets} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    support: state.support
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getTickets
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
