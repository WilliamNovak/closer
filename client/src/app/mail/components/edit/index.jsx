import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMail } from 'module-mail/models/get'
import { updateMail } from 'module-mail/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) { super(props) }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateMail(id, data)
        toastr.success('Mail atualizado com sucesso')
    }

    componentWillMount = () => {
        let { current } = this.props.mail
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getMail(currentId)
        }
    }

    render() {

        const { current } = this.props.mail

        if (current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ mail: state.mail })
const mapDispatchToProps = dispatch => bindActionCreators({ getMail, updateMail }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
