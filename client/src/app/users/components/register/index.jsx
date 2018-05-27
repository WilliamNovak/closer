import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentUser } from 'module-users/actions'
import { registerUser } from 'module-users/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerUser(values)
        toastr.success('User cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.users.current) {
            this.props.setCurrentUser(false)
        }
    }

    render() {

        const { current } = this.props.users

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    users: state.users
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerUser, setCurrentUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
