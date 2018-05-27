import React from 'react'

import { CounterIndicator } from 'html-indicator-card'
import { Row, Column } from 'html-grid'
import { Link } from 'react-router'
import DataTable from 'module-products/components/data-table-component'
import TopSelling from 'module-products/components/top-selling-component'
import sitemap from 'sitemap'

export default props => {

    const { topSelling } = props

    return (
        <div page={sitemap.products_index} register={sitemap.products_register}>

            <Row>
                <Column>
                    <CounterIndicator icon="list-ul" title="vendidos" modifier="primary" key="catalog-sold">
                        {props.indicators.sold}
                    </CounterIndicator>
                </Column>
                <Column>
                    <CounterIndicator icon="bar-chart" title="novos" modifier="success" key="catalog-new">
                        {props.indicators.new}
                    </CounterIndicator>
                </Column>
                <Column>
                    <CounterIndicator icon="files-o" title="entregas" modifier="warning" key="catalog-delivered">
                        {props.indicators.delivered}
                    </CounterIndicator>
                </Column>
                <Column>
                    <CounterIndicator icon="plus-square-o" title="aprovados" modifier="success" key="catalog-approved">
                        {props.indicators.approved}
                    </CounterIndicator>
                </Column>
            </Row>

            <br />

            <Row>
                <Column>
                    <DataTable />
                </Column>
            </Row>

            <hr />

            <Row>
                <Column mobile={12} tablet={12} desktop={6}>
                    <TopSelling data={topSelling} />
                </Column>
                <Column mobile={12} tablet={12} desktop={6}>
                    <TopSelling data={topSelling} />
                </Column>
            </Row>

        </div>
    )
}
