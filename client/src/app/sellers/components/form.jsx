import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'
import UserSelect from 'module-users/components/form-select-component'

class SellerForm extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSave } = this.props

        return (
            <form onSubmit={handleSubmit(onSave)}>

                <Field
                    name="name"
                    type="text"
                    label="Razão Social"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="fantasyname"
                    type="text"
                    label="Nome fantasia"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="cnpj"
                    type="text"
                    label="CNPJ"
                    placeholder="000.000.0000/0000-00"
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
                    type="mobile"
                    label="Telefone Comercial"
                    placeholder="41 99999999"
                    component={renderField}
                    validate={[required, phoneNumber]}
                    />

                <UserSelect
                    label="Responsável"
                    name="user_id"
                    />

                <UserSelect
                    label="Key Account"
                    name="key_account"
                    />

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary" >
                    salvar
                </button>

            </form>
        )

    }
}

SellerForm = reduxForm({
    form: 'seller-form',
    destroyOnUnmount: true
})(SellerForm)

let defaultValues = {
    name: null,
    fantasyname: null,
    cnpj: null,
    email: null,
    mobile: null
}

const mapStateToProps = state => ({
    initialValues: ( state.sellers.current ? state.sellers.current : defaultValues )
})

export default connect(mapStateToProps)(SellerForm)
