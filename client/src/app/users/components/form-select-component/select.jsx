import React from 'react'
import { renderSelect } from 'form-utils'
import { Field } from 'redux-form'


export default props => {
    const { name, label, data } = props

    let options = data.map(u =>
        <option key={"form-select-option-id-" + u.id} value={u.id}>
            {u.id} - {u.first_name} {u.last_name}
        </option>
    )

    return (
        <Field name={name} label={label} component={renderSelect} options={options} />
    )
}
