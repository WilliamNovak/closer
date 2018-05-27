import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOut  } from '../../actions'
import sitemap from 'sitemap'

/**
 * Component LogOut.
 */
class LogOut extends Component {

    constructor(props) {
        super (props)
        this.state = {
        }
    }

    render() {

        let controller = true
        if (controller) {
            setTimeout(() => {
                this.props.logOut()
                this.props.router.push(sitemap.auth_sign_in.route)
            }, 2000)
            controller = false
        }

        return <div>Tchau Tchau!</div>

    }
}

LogOut.contextTypes = {
    router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({  })
const mapDispatchToProps = dispatch => bindActionCreators({ logOut }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LogOut)
