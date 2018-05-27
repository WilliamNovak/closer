import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDevices } from 'module-devices/models/get'
import DataTable from './data-table'

class DataTableComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.devices.data) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getDevices()
    }

    setSelectedDevices = (collection) => {
        console.log(collection)
    }

    render() {

        const { data } = this.props.devices

        if (data) {
            return <DataTable setSelectedDevices={this.setSelectedDevices} data={data} />
        }

        return <div>
            Nenhum produto encontrado.
        </div>

    }
}

const mapStateToProps = state => ({
    devices: state.devices
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getDevices
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent)
