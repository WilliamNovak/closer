import React, { Component } from 'react'
import Icon from 'html-icon'
import { LogoColor } from 'module-template/components/default/logo'
import './styles.css'

export default class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }

    show= (event) => {
        event.preventDefault()
        this.setState({ isVisible: true }, () => {
            document.addEventListener('click', this.hide)
        })
    }

    hide = (event) => {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ isVisible: false }, () => {
                document.removeEventListener('click', this.hide)
            })
        }
    }

    renderItem = (item, active) => {
        return (
            <a href={"#" + item.href} className={"dropdown item " + ( item.page === active ? 'is-active' : '' )}>
                <Icon name={item.icon} />
                <span className="label">
                    {item.label}
                </span>
            </a>
        )
    }

    render() {

        const { isVisible } = this.state
        const { itens, active } = this.props

        return (
            <div>
                <div className="dropdown bar" onClick={this.show}>
                    <div className="dropdown icon">
                        <Icon name="navicon" />
                    </div>
                    <div className="dropdown brand">
                        <LogoColor />
                    </div>
                </div>
                <div
                    className={"dropdown content " + ( isVisible ? 'is-visible' : 'is-hidden' )}
                    ref={(element) => { this.dropdownMenu = element }}
                    >
                    <div className="dropdown bar" onClick={this.show}>
                        <div className="dropdown icon">
                            <Icon name="navicon" />
                        </div>
                        <div className="dropdown brand">
                            <LogoColor />
                        </div>
                    </div>
                    {itens.map(i=>this.renderItem(i, active))}
                </div>

                <div className={"dropdown backdrop " + ( isVisible ? 'is-visible' : 'is-hidden' )} />
            </div>
        )
    }
}
