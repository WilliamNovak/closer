import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { fileField, renderField, required } from 'form-utils'
import { TwitterPicker } from 'react-color'
import { Card } from 'html-component'

class SellerUiForm extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSave, changeLogo, changeColors } = this.props

        return (
            <form onSubmit={handleSubmit(onSave)}>

                <Field
                    name="logo"
                    type="file"
                    label="Logotipo"
                    component={fileField}
                    onChange={changeLogo}
                    />

                <br />

                <div className="form-group">
                    <label>Cor príncipal do fundo</label>
                    <TwitterPicker onChange={(color) => changeColors('primary_background_color', color)} />
                </div>

                <div className="form-group">
                    <label>Cor príncipal do texto</label>
                    <TwitterPicker onChange={(color) => changeColors('primary_text_color', color)} />
                </div>

                <div className="form-group">
                    <label>Cor secundária do fundo</label>
                    <TwitterPicker onChange={(color) => changeColors('secondary_background_color', color)} />
                </div>

                <div className="form-group">
                    <label>Cor secundária do texto</label>
                    <TwitterPicker onChange={(color) => changeColors('secondary_text_color', color)} />
                </div>

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary" >
                    salvar
                </button>

            </form>
        )

    }
}

SellerUiForm = reduxForm({
    form: 'setting-seller-ui-form',
    destroyOnUnmount: true
})(SellerUiForm)


const mapStateToProps = state => ({
    initialValues: (
        state.settings.current ?
        state.settings.current :
        {
            primary_background_color: null,
            primary_text_color: null,
            secondary_background_color: null,
            secondary_text_color: null,
            logo: null
        }
    )
})

export default connect(mapStateToProps)(SellerUiForm)
