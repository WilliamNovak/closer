import React from 'react'
import { Container, Row, Column } from 'html-grid'
import { Link } from 'react-router'
import Icon from 'html-icon'
import Dropdown from './menu/'
import st from 'sitemap'
import './styles.css'
const sitemap = Object.values(st)

/* TODO make beautiful this code! */

const Breadcrumb = props => {
    return (
        <section className="breadcrumbs">

            {
                props.child && props.child.map(
                    child => <div className="item">
                        { st[child].icon && <Icon name={st[child].icon} />}
                        {st[child].label}
                    </div>
                )
            }

            <div className="item index">
                {props.label}
            </div>

        </section>
    )
}

export default props => {

    let dropdown = []
    sitemap.map(i => i.menu && dropdown.push(i))

    return (
        <div>

            {
                props.page.template === 'default' &&
                <header>
                    <Dropdown itens={dropdown} active={props.page.page} />
                </header>

            }

            {
                props.page.template === 'default' &&
                <Container fluid>
                    <Row>
                        <Column mobile={12} tablet={12} desktop={12}>
                            <Breadcrumb {...props.page} />
                        </Column>
                    </Row>
                </Container>
            }

            <section>
                <Container>
                    {props.children}
                </Container>
            </section>

        </div>
    )
}
