import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Unauthorized from './components/unauthorized'
import { changePage } from 'module-navigation/models/'

export const Auth = (WrappedComponent, item) => {

    class Authorization extends Component {

        constructor(props){ super(props) }

        componentWillMount = () => this.props.changePage(item)

        render() {

            return (
                item.roles.includes(this.props.auth.role) ?
                <WrappedComponent {...this.props} /> :
                <Unauthorized />
            )

        }

    }

    const mapStateToProps = state => ({
        auth: state.auth,
        navigation: state.navigation
    })

    const mapDispatchToProps = dispatch => bindActionCreators({
        changePage
    }, dispatch)

    return connect(mapStateToProps, mapDispatchToProps)(Authorization)
}

export default Auth
