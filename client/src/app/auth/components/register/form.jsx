import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import View from './view'
import { required, mobileNumber, email, renderField } from 'form-utils'

class SignIn extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSubmit } = this.props

        return (
            <View>
                <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>

                    <Field
                        name="name"
                        type="texr"
                        label="Seu nome"
                        placeholder="Steve Jobs"
                        component={renderField}
                        validate={[required]}
                        />

                    <Field
                        name="email"
                        type="email"
                        label="Seu e-mail"
                        placeholder="ex.: seunome@gmail.com"
                        component={renderField}
                        validate={[required, email]}
                        />

                    <Field
                        name="password"
                        type="password"
                        label="Senha"
                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
                        component={renderField}
                        validate={[required]}
                        />

                    <Field
                        name="re_password"
                        type="password"
                        label="Confirmar senha"
                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
                        component={renderField}
                        validate={[required]}
                        />

                    <Field
                        name="mobile"
                        type="mobile"
                        label="Celular"
                        placeholder="99 999999999"
                        component={renderField}
                        validate={[required, mobileNumber]}
                        />

                    <button type="submit" disabled={pristine || submitting} className="btn btn-lg btn-primary btn-block" >
                        criar conta
                    </button>

                </form>
            </View>
        )

    }
}

SignIn = reduxForm({
    form: 'signIn',
    destroyOnUnmount: false
})(SignIn)

const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
