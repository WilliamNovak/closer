import React from 'react'
import Icon from 'html-icon'
import './styles.css'

/**
 * Progress Element Component.
 * @param children
 */
export const Progress = props => (
    <div className="progress" style={{height: '6px'}}>
        {props.children}
    </div>
)

/**
 * Progress Bar Element Component.
 * @param value
 * @param max
 */
export const ProgressBar = props => <div className="progress-bar" role="progressbar" style={{width: props.value + '%'}} aria-valuenow={props.value} aria-valuemin="0" aria-valuemax={props.max} />

/**
 * Breadcrumbs Component.
 * @param pages
 */
export const Breadcrumbs = props => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {
                !props.pages ? '' :
                props.pages.map(
                    (bread, index) => <li key={"breadcrumb-bread-label-" + bread.label + "-" + index} className="breadcrumb-item active" aria-current="page">
                        <a href={bread.linkTo}>{bread.label}</a>
                    </li>
                )
            }
        </ol>
    </nav>
)

export const Cards = props => <div className="card-columns">{props.children}</div>

/**
 * Card Element Component.
 * @param modifier
 * @param nopadding
 * @param className
 * @param title
 * @param children
 */
export const Card = props => (
    <div className={
            "card " + ( props.nopadding ? 'no-padding' : '' ) +
            ( props.modifier ? " text-white bg-" + props.modifier : '' ) +
            ( props.className ? props.className + ' ' : '' )
        }>
        <div className="card-body">
            {
                props.title ?
                <h5 className="card-title">
                    {props.title}
                </h5>
                : ''
            }
            {props.children}
        </div>
    </div>
)

export const Navbar = props => (
    <nav className={"navbar " + ( props.className ? props.className : '' )}>
        <div className={(props.container ? 'container': '')}>
            { !props.logo ? '' :  <a className="navbar-brand" href="#"><img src={props.logo} width="30" height="30" className="d-inline-block align-top" alt={props.name} /></a> }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">{props.children}</div>
        </div>
    </nav>
)

export const NavbarVertical = props => <nav className={"navbar " + ( props.className ? props.className : '' )}>{props.children}</nav>
export const NavbarNav = props => <div className="navbar-nav">{props.children}</div>
export const NavLink = props => (
    <a title={props.label} className={"nav-item nav-link " + ( props.active ? 'active' : '' )} href={props.href}>
        <span className="icon"><Icon name={props.icon} /></span><span className="text">{props.label}</span>
    </a>
)



/**
 * Title Element Component.
 * @param name
 */
export const Title = props => <h1 className="h1">{props.children}</h1>

/**
 * Sub Title Element Component.
 * @param name
 */
export const Subtitle = props => <h2 className="h2">{props.children}</h2>
