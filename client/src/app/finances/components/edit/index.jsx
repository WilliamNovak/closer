import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFinance } from 'module-finances/models/get'
import { updateFinance } from 'module-finances/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) { super(props) }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateFinance(id, data)
        toastr.success('Financeiro atualizado com sucesso')
    }

    componentWillMount = () => {
        let { current } = this.props.finances
        let currentId = this.props.params.id
        if ( !current || current.id !== currentId ) {
            this.props.getFinance(currentId)
        }
    }

    render() {

        const { current } = this.props.finances

        if (current) {
            return <View onSave={this.onSave} />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ finances: state.finances })
const mapDispatchToProps = dispatch => bindActionCreators({ getFinance, updateFinance }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
