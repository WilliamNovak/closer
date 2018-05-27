import React from 'react'
import { Container, Row, Column } from 'html-grid'

import Form from '../form'

export default props => (
    <div page={sitemap.faq_register}>>
        <Row>
            <Column mobile={12} tablet={12} desktop={12}>
                <Form {...props} />
            </Column>
        </Row>
    </div>
)
