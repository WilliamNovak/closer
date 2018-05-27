import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentDevice } from 'module-devices/actions'
import { registerDevice } from 'module-devices/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerDevice(values)
        toastr.success('Dispositivo cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.devices.current) {
            this.props.setCurrentDevice(false)
        }
    }

    render() {

        const { current } = this.props.devices

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    devices: state.devices
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerDevice, setCurrentDevice }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
