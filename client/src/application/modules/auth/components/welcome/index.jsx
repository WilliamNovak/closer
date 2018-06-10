import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthWelcomeView from 'application/modules/auth/components/welcome/view'

class AuthWelcomeContainer extends PureComponent {

    componentWillMount = () => {
        const {
            auth: { authenticated }
        } = this.props
        !authenticated && this.props.router.push("/")
    }

    render() {

        const {
            auth: { user }
        } = this.props

        return <AuthWelcomeView {...user} />

    }
}

AuthWelcomeContainer.contextTypes = {
    router: PropTypes.object.isRequired
}

AuthWelcomeContainer.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthWelcomeContainer)
