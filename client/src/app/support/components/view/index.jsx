import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSupport } from 'module-support/models/get'
import View from './view'

class Support extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.support
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getSupport(currentId)
        }
    }

    render() {

        const { current } = this.props.support

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    support: state.support
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getSupport
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Support)
