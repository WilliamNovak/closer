import React from 'react'

import { Row, Column } from 'html-grid'
import DataTable from 'module-faq/components/data-table-component'
import sitemap from 'sitemap'

export default props => (
    <div page={sitemap.faq_index} register={sitemap.faq_register}>

        <Row>
            <Column>
                <DataTable />
            </Column>
        </Row>

    </div>

)
