import React from 'react'

import { CounterIndicator } from 'html-indicator-card'
import { Progress, ProgressBar } from 'html-component'
import { Row, Column } from 'html-grid'
import DataTable from 'module-logistics/components/data-table-component'
import sitemap from 'sitemap'

const percent = (value, i) => {
    value = value.replace(/\D/g, '')
    let max = value * (i + 1)
    return Math.floor((value / max) * 100)
}

export default props => (
    <div page={sitemap.logistics_index}>
        <Row>
            <Column>
                <DataTable />
            </Column>
        </Row>
    </div>
)
