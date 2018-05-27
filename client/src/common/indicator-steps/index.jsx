import React from 'react'
import './styles.css'

/**
 * Step Container.
 * @param step
 * @param description
 */
export const Steps = props => (
    <div className="row bs-wizard">
        {props.children}
    </div>
)

/**
 * Step Element.
 * @param step
 * @param description
 */
export const Step = props => (
    <div className="col bs-wizard-step complete">
        <div className="text-center bs-wizard-stepnum">
            {props.step}
        </div>
        <div className="progress">
            <div className="progress-bar" />
        </div>
        <div className="bs-wizard-dot" />
        <div className="bs-wizard-info text-center">
            <small>
                {props.description}
            </small>
        </div>
    </div>
)
