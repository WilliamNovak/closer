import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategories } from 'module-faq/models/get'
import Select from './select'

class FormComponent extends Component {

    constructor(props) { super(props) }

    componentWillMount = () => {
        if (!this.props.faq.categories) {
            this.refresh()
        }
    }

    refresh = () => {
        this.props.getCategories()
    }

    render() {

        const { categories } = this.props.faq

        if (categories) {
            return <Select data={categories} {...this.props} />
        }

        return <div />

    }
}

const mapStateToProps = state => ({
    faq: state.faq
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCategories
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
