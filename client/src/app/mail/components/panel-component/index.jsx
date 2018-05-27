import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Panel from './panel'
import { getMails, getCategories } from 'module-mail/models/get'

class PanelComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        const { data, categories } = this.props.mail

        if (!data) {
            this.props.getMails()
        }

        if (!categories) {
            this.props.getCategories()
        }
    }

    render() {

        return <Panel mail={this.props.mail} />

    }
}

const mapStateToProps = state => ({
    support: state.support,
    mail: state.mail
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getMails, getCategories
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PanelComponent)
