import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategories } from 'module-mail/models/get'
import Select from './select'

class FormComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.mail.categories) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getCategories()
    }

    render() {

        const { categories } = this.props.mail

        if (categories) {
            return <Select data={categories} {...this.props} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    mail: state.mail
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCategories
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
