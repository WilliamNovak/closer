import React from 'react'
import './styles.css'

export const tablet = props => (
    <div className="tablet">
        <div className="header">
            <div className="camera"/>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
)
