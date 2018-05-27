import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentSupport } from 'module-support/actions'
import { registerSupport } from 'module-support/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerSupport(values)
        toastr.success('Support cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.support.current) {
            this.props.setCurrentSupport(false)
        }
    }

    render() {

        const { current } = this.props.support

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    support: state.support
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerSupport, setCurrentSupport }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
