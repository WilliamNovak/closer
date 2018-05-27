import React from 'react'
import { CounterIndicator } from 'html-indicator-card'

import { Breadcrumbs, Card } from 'html-component'
import { Row, Column } from 'html-grid'
import { Table, Tbody, Tr, Td } from '../../../../common/html/table'
import Status from './cards/status'

/*
 * Dashboard Orders component.
 */
export default props => (
    <div page="orders">

        <Breadcrumbs pages={[
            { linkTo: '#dashboard/home', label: 'Dashboard' },
            { linkTo: null, label: 'Pedidos' }
        ]} />

        <Row>
            <Column>
                <CounterIndicator icon="list-ul" title="cancelados" modifier="danger" key="orders-canceled">
                    {props.indicators.ordersCanceled}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="files-o" title="entregues" modifier="success" key="orders-delivered">
                    {props.indicators.ordersDelivered}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="caret-up" title="atrasados" modifier="warning" key="orders-late">
                    {props.indicators.ordersLate}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="caret-up" title="novos" modifier="info" key="orders-new">
                    {props.indicators.ordersNew}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="caret-up" title="pendentes" modifier="warning" key="orders-pending">
                    {props.indicators.ordersPending}
                </CounterIndicator>
            </Column>
        </Row>

        <br />

        <Row>
            <Column>
                <Card>
                    <Status
                        new={props.indicators.ordersNew}
                        pending={props.indicators.ordersPending}
                        late={props.indicators.ordersLate}
                        canceled={props.indicators.ordersCanceled}
                        delivered={props.indicators.ordersDelivered}
                    />
                </Card>
            </Column>
        </Row>

        <br />

        <Row>
            <Column>
                <Card nopadding>
                {
                    props.collections.orders ?
                    <Table>
                        <Tbody>
                            {props.collections.orders.map(
                                o => (
                                    <Tr key={"ooid-" + o.id}>
                                        <Td>{o.id}</Td>
                                        <Td>{o.total}</Td>
                                        <Td>{o.status}</Td>
                                        <Td>{o.user}</Td>
                                        <Td>{o.qty}</Td>
                                        <Td>{o.created_at}</Td>
                                        <Td>{o.payment_name}</Td>
                                        <Td>{o.deadline}</Td>
                                        {/*<Td><a href={"#orders/" + o.id}>abrir</a></Td>*/}
                                        <Td><a href={"#orders/49"}>abrir</a></Td>
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
