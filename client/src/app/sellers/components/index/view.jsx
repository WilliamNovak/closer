import React from 'react'
import { CounterIndicator } from 'html-indicator-card'
import { Progress, ProgressBar } from 'html-component'
import { Row, Column } from 'html-grid'
import DataTable from 'module-sellers/components/data-table-component'
import sitemap from 'sitemap'

const percent = (value, i) => {
    value = value.replace(/\D/g, '')
    let max = value * (i + 1)
    return Math.floor((value / max) * 100)
}

export default props => (
    <div>
        <Row>
            <Column>
                <CounterIndicator>
                    {
                        props.indicators.top ?
                            <div>
                                {props.indicators.top.map(
                                    (s, i) =>
                                    (
                                        <div key={'tsid-' + s.id + i}>
                                            {s.name} <small>{s.total}</small>
                                            <Progress>
                                                <ProgressBar value={percent(s.total, i)} max={100} />
                                            </Progress>
                                        </div>
                                    )
                                )}
                            </div>
                        : ''
                    }
                </CounterIndicator>
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
