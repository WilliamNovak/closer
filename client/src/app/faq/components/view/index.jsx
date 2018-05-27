import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFaq } from 'module-faq/models/get'
import View from './view'

class Faq extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.faq
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getFaq(currentId)
        }
    }

    render() {

        const { current } = this.props.faq

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    faq: state.faq
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getFaq
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
