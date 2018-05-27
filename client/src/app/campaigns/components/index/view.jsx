import React from 'react'
import { Row, Column } from 'html-grid'
import DataTable from 'module-campaigns/components/data-table-component'
import sitemap from 'sitemap'

export default props => (
    <div page={sitemap.campaigns_index} register={sitemap.campaigns_register}>
        <Row>
            <Column>
                <DataTable />
            </Column>
        </Row>
    </div>
)
