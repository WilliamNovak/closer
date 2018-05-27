import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, renderTextarea, required, phoneNumber, mobileNumber, email } from 'form-utils'

class SupportForm extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSave } = this.props

        return (
            <form onSubmit={handleSubmit(onSave)}>

                <Field
                    name="name"
                    type="text"
                    label="Título"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="description"
                    type="text"
                    label="Descrição"
                    component={renderTextarea}
                    placeholder="Digite aqui a sua dúvida..."
                    validate={[required]}
                    />

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary" >
                    abrir chamado
                </button>

            </form>
        )

    }
}

SupportForm = reduxForm({
    form: 'support-form',
    destroyOnUnmount: true
})(SupportForm)


const mapStateToProps = state => ({
    initialValues: (
        state.support.current ?
        state.support.current :
        {
            name: null,
            description: null
        }
    )
})

export default connect(mapStateToProps)(SupportForm)
