import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFinance } from 'module-finances/models/get'
import View from './view'

class Finance extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.finances
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getFinance(currentId)
        }
    }

    render() {

        const { current } = this.props.finances

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    finances: state.finances
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getFinance
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Finance)
