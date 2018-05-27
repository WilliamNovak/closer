import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentCampaign } from 'module-campaigns/actions'
import { registerCampaign } from 'module-campaigns/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerCampaign(values)
        toastr.success('Campaign cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.campaigns.current) {
            this.props.setCurrentCampaign(false)
        }
    }

    render() {

        const { current } = this.props.campaigns

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    campaigns: state.campaigns
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerCampaign, setCurrentCampaign }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
