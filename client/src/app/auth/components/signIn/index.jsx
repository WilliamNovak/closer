import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from './form'
import { signIn } from 'module-auth/models/'
import sitemap from 'sitemap'

class Index extends Component {

    constructor(props) { super(props) }

    onSubmit = (values) => this.props.signIn(values)

    render() {

        if (!this.props.auth.authenticated) {
            return <Form onSubmit={this.onSubmit} />
        } else {
            this.props.router.push(sitemap.dashboard_admin_index.route)
        }

        return <div />
    }
}

Index.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ signIn }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Index)
