import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'

class UserForm extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSave } = this.props

        return (
            <form onSubmit={handleSubmit(onSave)}>

                <Field
                    name="first_name"
                    type="text"
                    label="Nome"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="last_name"
                    type="text"
                    label="Sobrenome"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="email"
                    type="email"
                    label="E-mail"
                    component={renderField}
                    validate={[required, email]}
                    />

                <Field
                    name="mobile"
                    type="text"
                    label="Celular"
                    component={renderField}
                    validate={[required, mobileNumber]}
                    />

                <Field
                    name="phone"
                    type="text"
                    label="Telefone"
                    component={renderField}
                    validate={[required, phoneNumber]}
                    />

                {
                    // TODO adicionar desconto permitido gerente
                    // TODO adicionar desconto permitido por vendedor

                }

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary" >
                    salvar
                </button>

            </form>
        )

    }
}

UserForm = reduxForm({
    form: 'user-form',
    destroyOnUnmount: true
})(UserForm)


const mapStateToProps = state => ({
    initialValues: (
        state.users.current ?
        state.users.current :
        {
            first_name: null,
            last_name: null,
            email: null,
            mobile: null,
            phone: null
        }
    )
})

export default connect(mapStateToProps)(UserForm)
