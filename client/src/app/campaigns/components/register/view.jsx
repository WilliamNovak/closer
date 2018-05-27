import React from 'react'
import { Row, Column } from 'html-grid'
import Form from '../form'
import sitemap from 'sitemap'

export default props => (
    <div page={sitemap.campaigns_register}>
        <Row>
            <Column mobile={12} tablet={12} desktop={12}>
                <Form {...props} />
            </Column>
        </Row>
    </div>
)
