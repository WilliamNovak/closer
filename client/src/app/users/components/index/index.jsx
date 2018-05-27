import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import View from './view'
import { getUserIndicators } from 'module-users/models/get'

class Index extends Component {

    constructor(props) { super(props) }

    render() {

        const {
            usersIndicatorsUpdated,
            indicators
        } = this.props.users

        if (!usersIndicatorsUpdated) {
            this.props.getUserIndicators()
        }

        return <View indicators={indicators} />

    }
}

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators({ getUserIndicators }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
