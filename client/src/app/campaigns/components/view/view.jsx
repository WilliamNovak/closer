import React from 'react'
import { Row, Column } from 'html-grid'
import sitemap from 'sitemap'

export default props => {
    const { id, name, serial } = props
    return (
        <div>
            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <span>{id}</span>
                    <h1>{name}</h1>
                    <p>{serial}</p>
                </Column>
            </Row>
        </div>
    )
}
