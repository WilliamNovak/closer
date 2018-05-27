import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import View from './view'
import { getFinanceIndicators } from 'module-finances/models/get'

class Index extends Component {

    constructor(props) { super(props) }

    render() {

        const {
            financesIndicatorsUpdated,
            indicators
        } = this.props.finances

        if (!financesIndicatorsUpdated) {
            this.props.getFinanceIndicators()
        }

        return <View indicators={indicators} />

    }
}

const mapStateToProps = state => ({
    finances: state.finances
})

const mapDispatchToProps = dispatch => bindActionCreators({ getFinanceIndicators }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
