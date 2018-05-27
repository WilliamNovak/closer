import React from 'react'

import { Row, Column } from 'html-grid'
import DataTable from 'module-devices/components/data-table-component'
import sitemap from 'sitemap'

export default props => (
    <div page={sitemap.devices_index} register={sitemap.devices_register}>
        <Row>
            <Column>
                <DataTable />
            </Column>
        </Row>
    </div>
)
