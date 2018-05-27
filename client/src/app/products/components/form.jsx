import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'
import ProductsCheckbox from 'module-products/components/form-checkbox-component'


class ProductForm extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSave } = this.props

        return (
            <form onSubmit={handleSubmit(onSave)}>

                <Field
                    name="title"
                    type="text"
                    label="Nome do produto"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="sku"
                    type="text"
                    label="SKU"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="price"
                    type="text"
                    label="Preço"
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="reference"
                    type="text"
                    label="Ref."
                    component={renderField}
                    validate={[required]}
                    />

                <Field
                    name="stock"
                    type="text"
                    label="Estoque"
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


                <ProductsCheckbox />

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary" >
                    salvar
                </button>

            </form>
        )

    }
}

ProductForm = reduxForm({
    form: 'product-form',
    destroyOnUnmount: true
})(ProductForm)


const mapStateToProps = state => ({
    initialValues: (
        state.products.current ?
        state.products.current :
        {
            title: null,
            sku: null,
            category: null,
            price: null,
            brand: null,
            stock: null,
            reference: null
        }
    )
})

export default connect(mapStateToProps)(ProductForm)
