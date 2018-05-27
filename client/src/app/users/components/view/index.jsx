import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from 'module-users/models/get'
import View from './view'

class User extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.users
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getUser(currentId)
        }
    }

    render() {

        const { current } = this.props.users

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User)
