import React from 'react'
import Icon from 'html-icon'
import './styles.css'

/**
 * Counter Card Widget (component).
 *
 * @param title
 * @param modifier
 * @param children
 */
export const CounterIndicator = props => (
    <div className={"counter-card mb-4 " + ( props.modifier ? props.modifier : '' )}>
        <div className="icon">
            <Icon name={props.icon} />
        </div>
        <div className="content">
            <div className="title">
                {props.title}
            </div>
            <div className="counter">
                {props.children}
            </div>
        </div>
    </div>
)

/**
 * Counter Card Widget (component).
 *
 * @param title
 * @param modifier
 * @param children
 */
export const ChartIndicator = props => (
    <div className={"chart-card mb-4 " + ( props.modifier ? props.modifier : '' )}>
        <div className="header">
            <Icon name={props.icon} />
            <span className="title">
                {props.title}
            </span>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
)
