import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signIn } from 'application/modules/auth/models'
import AuthSignInView from 'application/modules/auth/components/signIn/view'

class AuthSignInContainer extends Component {

    onSubmit = (formData = false) => {
        this.props.signIn(formData)
    }

    componentWillMount = () => ( this.props.auth.authenticated && this.redirect() )

    redirect = () => this.props.router.push("/welcome")

    shouldComponentUpdate = (nextProps, nextState) => {

        if ( nextProps.auth.authenticated ) {
            this.redirect()
            return false
        }

        return true
    }

    render() {

        const {
            auth: { authenticated }
        } = this.props

        if (!authenticated) {
            return <AuthSignInView onSubmit={this.onSubmit} />
        }

        return <div />

    }
}

AuthSignInContainer.contextTypes = {
    router: PropTypes.object.isRequired
}

AuthSignInContainer.propTypes = {
    auth: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignInContainer)
