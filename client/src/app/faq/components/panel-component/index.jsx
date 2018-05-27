import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Panel from './panel'
import { getFaqs, getCategories } from 'module-faq/models/get'

class PanelComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        const { data, categories } = this.props.faq

        if (!data) {
            this.props.getFaqs()
        }

        if (!categories) {
            this.props.getCategories()
        }
    }

    render() {

        return <Panel faq={this.props.faq} />

    }
}

const mapStateToProps = state => ({
    support: state.support,
    faq: state.faq
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getFaqs, getCategories
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PanelComponent)
