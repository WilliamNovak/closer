import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'
import CategoriesSelect from 'module-mail/components/form-select-component'

class MailForm extends Component {

    constructor(props) { super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSave } = this.props

        return (
            <form onSubmit={handleSubmit(onSave)}>

                <Field
                    name="name"
                    type="text"
                    label="Nome"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="description"
                    type="text"
                    label="Descrição"
                    component={renderField}
                    validate={[required]}
                    />

                <CategoriesSelect label="Categoria" name="category_id" />

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary" >
                    salvar
                </button>

            </form>
        )

    }
}

MailForm = reduxForm({
    form: 'mail-form',
    destroyOnUnmount: true
})(MailForm)


const mapStateToProps = state => ({
    initialValues: (
        state.mail.current ?
        state.mail.current :
        {
            name: null,
            category_id: 2
        }
    )
})

export default connect(mapStateToProps)(MailForm)
