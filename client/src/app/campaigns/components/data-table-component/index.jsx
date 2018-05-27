import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCampaigns } from 'module-campaigns/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.campaigns.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getCampaigns()
    }

    setSelectedCampaigns = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.campaigns

        if (data) {
            return <DataTable setSelectedCampaigns={this.setSelectedCampaigns} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    campaigns: state.campaigns
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCampaigns
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
