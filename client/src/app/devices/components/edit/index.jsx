import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDevice } from 'module-devices/models/get'
import { updateDevice } from 'module-devices/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) { super(props) }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateDevice(id, data)
        toastr.success('Dispositivo atualizado com sucesso')
    }

    componentWillMount = () => {
        let { current } = this.props.devices
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getDevice(currentId)
        }
    }

    render() {

        const { current } = this.props.devices

        if (current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ devices: state.devices })
const mapDispatchToProps = dispatch => bindActionCreators({ getDevice, updateDevice }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
