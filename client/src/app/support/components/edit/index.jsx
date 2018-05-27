import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSupport } from 'module-support/models/get'
import { updateSupport } from 'module-support/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) { super(props) }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateSupport(id, data)
        toastr.success('Support atualizado com sucesso')
    }

    componentWillMount = () => {
        let { current } = this.props.support
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getSupport(currentId)
        }
    }

    render() {

        const { current } = this.props.support

        if (current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ support: state.support })
const mapDispatchToProps = dispatch => bindActionCreators({ getSupport, updateSupport }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
