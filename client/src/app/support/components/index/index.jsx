import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import View from './view'
import { getFaqs, getCategories } from 'module-faq/models/get'
import { getSellerKeyAccount } from 'module-sellers/models/get'

class Index extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        const { data, categories } = this.props.faq

        if (!data) {
            this.props.getFaqs()
        }

        if (!categories) {
            this.props.getCategories()
        }

        const { ka, current } = this.props.sellers

        // TODO fix this
        if (!ka && !current ) {
            // this.props.getSellerKeyAccount(current.id)
            this.props.getSellerKeyAccount(29)
        }
    }

    render() {
        const { current, ka } = this.props.sellers

        return <View seller={current} ka={ka} faq={this.props.faq} />

    }
}

const mapStateToProps = state => ({
    support: state.support,
    faq: state.faq,
    sellers: state.sellers
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getFaqs, getCategories, getSellerKeyAccount
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
