import React from 'react'

import { CounterIndicator } from 'html-indicator-card'
import { Row, Column } from 'html-grid'
import DataTable from 'module-users/components/data-table-component'
import sitemap from 'sitemap'

export default props => (
    <div page={sitemap.users_index} register={sitemap.users_register}>

        <Row>
            <Column>
                <CounterIndicator icon="list-ul" title="usuários" modifier="primary" key="users-total">
                    {props.indicators.total}
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
