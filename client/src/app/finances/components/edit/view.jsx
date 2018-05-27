import React from 'react'
import { Row, Column } from 'html-grid'

import Form from '../form'
import sitemap from 'sitemap'

export default props => (
    <div page={sitemap.finances_edit}>
        <Row>
            <Column mobile={12} tablet={12} desktop={12}>
                <Form onSave={props.onSave} />
            </Column>
        </Row>
    </div>
)
