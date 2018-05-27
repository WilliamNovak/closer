import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'
import CategoriesSelect from 'module-faq/components/form-select-component'

class FaqForm extends Component {

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

FaqForm = reduxForm({
    form: 'faq-form',
    destroyOnUnmount: true
})(FaqForm)


const mapStateToProps = state => ({
    initialValues: (
        state.faq.current ?
        state.faq.current :
        {
            name: null,
            category_id: 2
        }
    )
})

export default connect(mapStateToProps)(FaqForm)
