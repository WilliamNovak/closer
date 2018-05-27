import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentMail } from 'module-mail/actions'
import { registerMail } from 'module-mail/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerMail(values)
        toastr.success('Mail cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.mail.current) {
            this.props.setCurrentMail(false)
        }
    }

    render() {

        const { current } = this.props.mail

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    mail: state.mail
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerMail, setCurrentMail }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
