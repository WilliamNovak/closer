import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { renderField, required, phoneNumber, mobileNumber, email } from 'form-utils'

class CampaignForm extends Component {

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

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary" >
                    salvar
                </button>

            </form>
        )

    }
}

CampaignForm = reduxForm({
    form: 'campaign-form',
    destroyOnUnmount: true
})(CampaignForm)


const mapStateToProps = state => ({
    initialValues: (
        state.campaigns.current ?
        state.campaigns.current :
        {
            name: null
        }
    )
})

export default connect(mapStateToProps)(CampaignForm)
