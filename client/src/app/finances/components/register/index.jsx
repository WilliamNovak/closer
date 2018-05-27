import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCurrentFinance } from 'module-finances/actions'
import { registerFinance } from 'module-finances/models/register'
import View from './view'

class Register extends Component {

    constructor(props) { super(props) }

    onSave = (values) => {
        this.props.registerFinance(values)
        toastr.success('Financeiro cadastrado com sucesso')
    }

    componentWillMount = () => {
        if (this.props.finances.current) {
            this.props.setCurrentFinance(false)
        }
    }

    render() {

        const { current } = this.props.finances

        if (!current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Register.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({
    finances: state.finances
})
const mapDispatchToProps = dispatch => bindActionCreators({ registerFinance, setCurrentFinance }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)
