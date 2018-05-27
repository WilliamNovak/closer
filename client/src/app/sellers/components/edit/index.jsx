import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSeller } from 'module-sellers/models/get'
import { updateSeller } from 'module-sellers/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) { super(props) }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateSeller(id, data)
        toastr.success('Seller atualizado com sucesso')
    }

    componentWillMount = () => {
        let { current } = this.props.sellers
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getSeller(currentId)
        }
    }

    render() {

        const { current } = this.props.sellers

        if (current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ sellers: state.sellers })
const mapDispatchToProps = dispatch => bindActionCreators({ getSeller, updateSeller }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
