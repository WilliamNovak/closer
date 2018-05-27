import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCampaign } from 'module-campaigns/models/get'
import View from './view'

class Campaign extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.campaigns
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getCampaign(currentId)
        }
    }

    render() {

        const { current } = this.props.campaigns

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    campaigns: state.campaigns
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCampaign
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)
