import React from 'react'
import { CounterIndicator } from 'html-indicator-card'

import { Breadcrumbs, Card } from 'html-component'
import { Row, Column } from 'html-grid'
import { Table, Tbody, Tr, Td } from '../../../../common/html/table'
import Transport from './cards/transport'

/*
 * Dashboard Logistics component.
 */
export default props => (
    <div page="logistics">

        <Breadcrumbs pages={[
            { linkTo: '#dashboard/home', label: 'Dashboard' },
            { linkTo: null, label: 'Logística' }
        ]} />

        <Row>
            <Column>
                <CounterIndicator icon="cubes" title="entregues" modifier="primary" key="logistics-delivered">
                    {props.indicators.logisticsDelivered}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="clock-o" title="em atraso" modifier="danger" key="logistics-delivered">
                    {props.indicators.logisticsLate}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="clock-o" title="novo" modifier="success" key="logistics-delivered">
                    {props.indicators.logisticsNew}
                </CounterIndicator>
            </Column>

        </Row>

        <br />

        <Row>
            <Column>
                <Card title="Logística">
                    <Transport
                        shipped={props.indicators.logisticsTransportShipped}
                        origin={props.indicators.logisticsTransportOrigin}
                        receiver={props.indicators.logisticsTransportReceiver}
                        inTransport={props.indicators.logisticsTransportInTransport}
                        delivered={props.indicators.logisticsTransportDelivered}
                        />
                </Card>
            </Column>
        </Row>

        <br />

        <Row>
            <Column>
                <Card nopadding>
                    {
                        props.collections.logistics ?
                        <Table>
                            <Tbody>
                                {props.collections.logistics.map(
                                    l => (
                                        <Tr key={"llid-" + l.id}>
                                            <Td>{l.id}</Td>
                                            <Td>{l.status}</Td>
                                            <Td>{l.created_at}</Td>
                                            <Td>{l.deadline_at}</Td>
                                            <Td>{l.nfe}</Td>
                                            <Td>{l.order}</Td>
                                            <Td>{l.origin}</Td>
                                        </Tr>
                                    )
                                )}
                            </Tbody>
                        </Table>
                        : ''
                    }
                </Card>
            </Column>
        </Row>

    </div>

)
