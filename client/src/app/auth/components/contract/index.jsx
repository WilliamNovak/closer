import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from './form'
import { signUp } from '../../models/'
import sitemap from 'sitemap'

class Index extends Component {

    constructor(props) { super(props) }

    signContract = () => {
        this.props.signUp()
        this.props.router.push(sitemap.auth_contract.route)
    }

    render() {

        return <Form signContract={this.signContract} />
    }
}

Index.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ signUp }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Index)
