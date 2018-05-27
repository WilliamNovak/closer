import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDevice } from 'module-devices/models/get'
import View from './view'

class Device extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.devices
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getDevice(currentId)
        }
    }

    render() {

        const { current } = this.props.devices

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    devices: state.devices
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getDevice
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Device)
