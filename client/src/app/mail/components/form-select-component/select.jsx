import React from 'react'
import { renderSelect } from 'form-utils'
import { Field } from 'redux-form'

export default props => {
    const { name, label, data } = props
    let options = data.map(c => <option key={"form-mail-select-option-id-" + c.id} value={c.id}>{c.name}</option>)
    return <Field name={name} label={label} component={renderSelect} options={options} />
}
