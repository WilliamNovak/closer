import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'

class FinanceForm extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSave } = this.props

        return (
            <form onSubmit={handleSubmit(onSave)}>

                <Field
                    name="order"
                    type="text"
                    label="Número do pedido"
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

FinanceForm = reduxForm({
    form: 'finance-form',
    destroyOnUnmount: true
})(FinanceForm)


const mapStateToProps = state => ({
    initialValues: (
        state.finances.current ?
        state.finances.current :
        {
            order: null
        }
    )
})

export default connect(mapStateToProps)(FinanceForm)
