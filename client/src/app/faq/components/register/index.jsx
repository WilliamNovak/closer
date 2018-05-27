import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentFaq } from 'module-faq/actions'
import { registerFaq } from 'module-faq/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerFaq(values)
        toastr.success('Faq cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.faq.current) {
            this.props.setCurrentFaq(false)
        }
    }

    render() {

        const { current } = this.props.faq

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    faq: state.faq
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerFaq, setCurrentFaq }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
