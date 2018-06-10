import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signOut, removeSessionUser } from 'application/modules/auth/actions'
import AuthSignOutView from 'application/modules/auth/components/signOut/view'

class AuthSignOutContainer extends PureComponent {

    componentWillMount = () => {
        this.props.signOut()
        this.props.removeSessionUser()
    }

    render = () => <AuthSignOutView />

}

AuthSignOutContainer.contextTypes = {
    router: PropTypes.object.isRequired
}

AuthSignOutContainer.propTypes = {
    auth: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
    signOut, removeSessionUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignOutContainer)
