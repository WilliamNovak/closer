import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from 'module-users/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.users.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getUsers()
    }

    setSelectedUsers = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.users

        if (data) {
            return <DataTable setSelectedUsers={this.setSelectedUsers} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
