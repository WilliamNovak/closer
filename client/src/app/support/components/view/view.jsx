import React from 'react'
import { Row, Column } from 'html-grid'

import sitemap from 'sitemap'

export default props => {
    const { id, name, description } = props
    return (
        <div page={sitemap.support_view} edit={sitemap.support_edit.href + id}>
            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <span>{id}</span>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </Column>
            </Row>
        </div>
    )
}
