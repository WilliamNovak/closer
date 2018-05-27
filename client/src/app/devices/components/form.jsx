import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'

class DeviceForm extends Component {

    constructor(props){ super(props) }

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
                    name="serial"
                    type="text"
                    label="Descrição"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="brand"
                    type="text"
                    label="Marca"
                    component={renderField}
                    validate={[required]}
                    />

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary" >
                    salvar
                </button>

            </form>
        )

    }
}

DeviceForm = reduxForm({
    form: 'device-form',
    destroyOnUnmount: true
})(DeviceForm)


const mapStateToProps = state => ({
    initialValues: (
        state.devices.current ?
        state.devices.current :
        {
            name: null,
            serial: null,
            brand: null
        }
    )
})

export default connect(mapStateToProps)(DeviceForm)
