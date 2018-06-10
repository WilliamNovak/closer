import React from 'react'

export const inputComponent = ({
    name, input, label, type, placeholder,
    meta: {
        touched, error, warning
    }
}) => (
    <div className="form-group">
        { label ? <label htmlFor={name}>{label}</label> : '' }
        <input {...input} placeholder={placeholder} type={type} className="form-control" />
        {touched && ((error && <small className="form-text text-muted">{error}</small>) || (warning && <small className="form-text text-muted">{warning}</small>))}
    </div>
)

export const textareaComponent = ({
    name, input, label, type, placeholder,
    meta: {
        touched, error, warning
    }
}) => (
    <div className="form-group">
        { label ? <label htmlFor={name}>{label}</label> : '' }
        <textarea {...input} placeholder={placeholder} type={type} className="form-control" />
        {touched && ((error && <small className="form-text text-muted">{error}</small>) || (warning && <small className="form-text text-muted">{warning}</small>))}
    </div>
)

export const selectComponent = field => (
    <div className="form-group">
        { field.label ? <label htmlFor={field.name}>{field.label}</label> : '' }
        <select {...field.input} className="form-control">
            {field.options}
        </select>
            {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
)

export const checkboxComponent = ({
    input, label, type,
    meta: {
        touched, error, warning
    }
}) => (
    <div className="form-check">
        <input {...input} type={type} className="form-check-input" />
        <label className="form-check-label">{label}</label>
        {touched && ((error && <small className="form-text text-muted">{error}</small>) || (warning && <small className="form-text text-muted">{warning}</small>))}
    </div>
)
