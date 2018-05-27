import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLogistic } from 'module-logistics/models/get'
import View from './view'

class Logistic extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.logistics
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getLogistic(currentId)
        }
    }

    render() {

        const { current } = this.props.logistics

        return ( current ? <View {...current} /> : <div /> )

    }
}

const mapStateToProps = state => ({
    logistics: state.logistics
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getLogistic
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Logistic)
