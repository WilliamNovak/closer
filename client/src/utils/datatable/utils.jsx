import React from 'react'
import './styles.css'

export const Thumbnail = props => (
    <div className="row-thumbnail">
        <img src={props.src} alt="" />
    </div>
)
