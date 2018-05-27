import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSeller } from 'module-sellers/models/get'
import View from './view'

class Seller extends Component {

    constructor(props) { super(props) }

    componentDidMount = () => {
        let { current } = this.props.sellers
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getSeller(currentId)
        }
    }

    render() {

        const { current } = this.props.sellers

        if (current) {
            return <View {...current} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    sellers: state.sellers
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getSeller
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Seller)
