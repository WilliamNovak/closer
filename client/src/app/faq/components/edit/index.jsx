import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFaq } from 'module-faq/models/get'
import { updateFaq } from 'module-faq/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) { super(props) }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateFaq(id, data)
        toastr.success('Faq atualizado com sucesso')
    }

    componentWillMount = () => {
        let { current } = this.props.faq
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getFaq(currentId)
        }
    }

    render() {

        const { current } = this.props.faq

        if (current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ faq: state.faq })
const mapDispatchToProps = dispatch => bindActionCreators({ getFaq, updateFaq }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
