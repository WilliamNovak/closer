import React from 'react'

import { CounterIndicator } from 'html-indicator-card'
import { Row, Column } from 'html-grid'
import DataTable from 'module-finances/components/data-table-component'
import sitemap from 'sitemap'

export default props => (
    <div page={sitemap.finances_index} register={sitemap.finances_register}>

        <Row>
            <Column>
                <CounterIndicator icon="list-ul" title="financeiros" modifier="primary" key="finances-profit">
                    {props.indicators.profit}
                </CounterIndicator>
            </Column>
            <Column>

            </Column>
            <Column>

            </Column>
            <Column>

            </Column>
        </Row>

        <br />

        <Row>
            <Column>
                <DataTable />
            </Column>
        </Row>

    </div>

)
