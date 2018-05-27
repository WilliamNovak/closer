import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCampaign } from 'module-campaigns/models/get'
import { updateCampaign } from 'module-campaigns/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) { super(props) }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateCampaign(id, data)
        toastr.success('Campaign atualizado com sucesso')
    }

    componentWillMount = () => {
        let { current } = this.props.campaigns
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getCampaign(currentId)
        }
    }

    render() {

        const { current } = this.props.campaigns

        if (current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ campaigns: state.campaigns })
const mapDispatchToProps = dispatch => bindActionCreators({ getCampaign, updateCampaign }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
