import React from 'react'
import { Row, Column } from 'html-grid'

import sitemap from 'sitemap'

export default props => {
    const { id } = props
    return (
        <div page={sitemap.logistics_view}>

            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <span>{id}</span>
                </Column>
            </Row>
        </div>
    )
}
