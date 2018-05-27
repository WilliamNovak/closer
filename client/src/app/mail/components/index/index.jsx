import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import View from './view'

class Index extends Component {

    constructor(props) { super(props) }

    render() {

        return <View />

    }
}

const mapStateToProps = state => ({
    mail: state.mail
})

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
