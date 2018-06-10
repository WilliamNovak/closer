import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoadingBar from 'commons/loading-bar'
import ToastMessage from 'commons/toastr-message'
import Routes from 'application/routes'
import { setUserFromSession } from 'application/modules/auth/actions'
import { logger } from 'utils/logger'

class Application extends PureComponent {

    constructor(props) {
        super(props)
    }

    componentWillMount = () => {
        logger('application/index.jsx loaded, componentWillMount called')

        const {
            auth: { authenticated }
        } = this.props

        if (!authenticated) {
            this.props.setUserFromSession()
        }
    }

    render() {

        return (
            <div>
                <LoadingBar />
                <ToastMessage />
                <Routes />
            </div>
        )

    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setUserFromSession
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Application)
