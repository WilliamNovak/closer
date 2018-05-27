import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from './form'
import { signUp } from 'module-auth/models/'
import sitemap from 'sitemap'

class Index extends Component {

    constructor(props) { super(props) }

    onSubmit = (values) => this.props.signUp(values)

    render() {

        if (!this.props.auth.authenticated) {
            return <Form onSubmit={this.onSubmit} />
        } else {
            this.props.router.push(sitemap.auth_contract.route)
        }

        return <div />
    }
}

Index.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ signUp }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Index)
