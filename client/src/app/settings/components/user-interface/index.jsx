import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSellerUi } from 'module-settings/models/get'
import { updateSellerUi } from 'module-settings/models/update'
import View from './view'

class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            preview: {
                logo: null,
                primary_background_color: null,
                primary_text_color: null,
                secondary_background_color: null,
                secondary_text_color: null
            }
        }
    }

    onSave = (data) => {
        let id = this.props.params.id
        this.props.updateSellerUi(id, data)
        toastr.success('Interface do Usuário atualizado com sucesso')
    }

    componentWillMount = () => {
        let { sellerUi } = this.props.settings
        let sellerUiId = this.props.params.id
        if ( !sellerUi || sellerUi.id !== sellerUiId ) {
            this.props.getSellerUi(sellerUiId)
        }
    }

    changeLogo = (e, file) => {

        let reader = new FileReader()
        reader.onloadend = () => {
            let statePreview = this.state.preview
            statePreview.logo = reader.result
            this.setState({preview: statePreview})
        }
        reader.readAsDataURL(file)
    }

    changeColors = (name, color) => {
        let statePreview = this.state.preview
        statePreview[name] = color.hex
        this.setState({preview: statePreview})
    }


    render() {

        const { sellerUi } = this.props.settings

        if (sellerUi) {
            return <View
                preview={this.state.preview}
                changeLogo={this.changeLogo}
                onSave={this.onSave}
                changeColors={this.changeColors}
                />
        }

        return <div />

    }
}

Edit.contextTypes = { router: PropTypes.object.isRequired }
const mapStateToProps = state => ({ settings: state.settings })
const mapDispatchToProps = dispatch => bindActionCreators({ getSellerUi, updateSellerUi }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
