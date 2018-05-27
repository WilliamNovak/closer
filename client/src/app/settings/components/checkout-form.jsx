import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'

class SellerCheckoutForm extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onUpdateCheckout } = this.props

        return (
            <form onSubmit={handleSubmit(onUpdateCheckout)}>

                <Field
                    name="interest_free"
                    type="text"
                    label="Número máximo de parcelas sem júros"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="min_value"
                    type="text"
                    label="Valor mínimo da parcela"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="max_plots"
                    type="text"
                    label="Número máximo de parcelas"
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

SellerCheckoutForm = reduxForm({
    form: 'seller-checkout-settings-form',
    destroyOnUnmount: true
})(SellerCheckoutForm)


const mapStateToProps = state => ({
    initialValues: (
        state.sellers.current ? state.sellers.current :
        {
            interest_free: null,
            min_value: 50.00,
            max_plots: 6
        }
    )
})

export default connect(mapStateToProps)(SellerCheckoutForm)
