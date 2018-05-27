import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from 'module-users/models/get'
import { updateUser } from 'module-users/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) { super(props) }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateUser(id, data)
        toastr.success('User atualizado com sucesso')
    }

    componentWillMount = () => {
        let { current } = this.props.users
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getUser(currentId)
        }
    }

    render() {

        const { current } = this.props.users

        if (current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ users: state.users })
const mapDispatchToProps = dispatch => bindActionCreators({ getUser, updateUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
