import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from 'module-users/models/get'
import Select from './select'

class FormComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.users.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getUsers()
    }

    render() {

        const { data } = this.props.users

        if (data) {
            return <Select data={data} {...this.props} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
