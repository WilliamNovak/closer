import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { inputComponent } from 'commons/form/components'
import { required, email } from 'commons/form/validators'

const SignIn = (props) => {

    const { handleSubmit, submitting, pristine, onSubmit } = props

    return (
        <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>

            <Field
                name="user"
                type="text"
                placeholder="..."
                component={inputComponent}
                validate={[required]}
                />

            <Field
                name="password"
                type="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
                component={inputComponent}
                validate={[required]}
                />

            <button type="submit" disabled={pristine || submitting} className="btn btn-lg btn-primary btn-block" >
                entrar
            </button>

        </form>
    )

}

export default reduxForm({
    form: 'signIn',
    destroyOnUnmount: true
})(SignIn)
