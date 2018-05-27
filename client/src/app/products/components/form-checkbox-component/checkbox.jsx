import React from 'react'
import { renderSelect } from 'form-utils'
import { Field } from 'redux-form'
import { checkboxGroup } from 'form-utils'

export default props => {
    let optionsList = [{id: 1, name: 'Optoin1'}, {id: 2, name: 'Option 2'}, {id: 3, name: 'Option 3'}]
    return (
        <Field name="roles" component={checkboxGroup} options={optionsList} /> 
    )
}
