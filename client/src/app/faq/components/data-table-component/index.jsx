import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFaqs } from 'module-faq/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.faqs.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getFaqs()
    }

    setSelectedFaqs = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.faqs

        if (data) {
            return <DataTable setSelectedFaqs={this.setSelectedFaqs} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    faqs: state.faq
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getFaqs
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
