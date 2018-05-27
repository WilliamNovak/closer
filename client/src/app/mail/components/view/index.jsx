import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMail } from 'module-mail/models/get'
import View from './view'

class Mail extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.mail
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getMail(currentId)
        }
    }

    render() {

        const { current } = this.props.mail

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    mail: state.mail
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getMail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mail)
