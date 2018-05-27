import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMails } from 'module-mail/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.mails.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getMails()
    }

    setSelectedMails = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.mails

        if (data) {
            return <DataTable setSelectedMails={this.setSelectedMails} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    mails: state.mail
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getMails
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
