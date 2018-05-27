import React from 'react'

import { Row, Column } from 'html-grid'
import DataTable from 'module-mail/components/data-table-component'
import sitemap from 'sitemap'

export default props => (
    <div page={sitemap.mail_index} register={sitemap.mail_register}>

        <Row>
            <Column>
                <DataTable />
            </Column>
        </Row>

    </div>

)
