import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import View from './view'
import { checkboxField } from 'form-utils'

class SignContract extends Component {

    constructor(props) { super(props) }

    onSubmit = (values) => {
        if (!values.signed_contract) {
            throw new SubmissionError({
              signed_contract: 'Você precisa concordar com esse contrato para continuar.'
            })
        }
        this.props.signContract(values)
    }

    render () {

        const { handleSubmit, submitting, pristine, SubmissionError } = this.props

        return (
            <View>
                <form className="form-signin" onSubmit={handleSubmit(this.onSubmit)}>

                    <Field
                        name="signed_contract"
                        type="checkbox"
                        label="li e concordo com tudo."
                        component={checkboxField}
                        />

                    <br />

                    <button type="submit" disabled={pristine || submitting} className="btn btn-lg btn-primary btn-block" >
                        Concordo
                    </button>

                </form>
            </View>
        )

    }
}

SignContract = reduxForm({
    form: 'signContract',
    destroyOnUnmount: false
})(SignContract)

const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SignContract)
