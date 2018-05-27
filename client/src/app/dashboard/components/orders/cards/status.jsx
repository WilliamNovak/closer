import React from 'react'
import ProgressPie from 'html-progress-bar-pie'
import { Row, Column } from 'html-grid'

const sumStatus = (isNew, pending, late, canceled, delivered) => (isNew + pending + late + canceled + delivered)
const percent = (value, total) => Math.floor((value / total) * 100)

export default props => (
    <Row>
        <Column>
            <ProgressPie key="orders-status-new" percent={percent(props.new, sumStatus(props.new, props.pending, props.late, props.canceled, props.delivered))} description="novos" />
        </Column>
        <Column>
            <ProgressPie key="orders-status-pending" percent={percent(props.pending, sumStatus(props.new, props.pending, props.late, props.canceled, props.delivered))} description="pendentes" />
        </Column>
        <Column>
            <ProgressPie key="orders-status-late" percent={percent(props.late, sumStatus(props.new, props.pending, props.late, props.canceled, props.delivered))} description="atrasos" />
        </Column>
        <Column>
            <ProgressPie key="orders-status-canceled" percent={percent(props.canceled, sumStatus(props.new, props.pending, props.late, props.canceled, props.delivered))} description="cancelados" />
        </Column>
        <Column>
            <ProgressPie key="orders-status-delivered" percent={percent(props.delivered, sumStatus(props.new, props.pending, props.late, props.canceled, props.delivered))} description="entregues" />
        </Column>
    </Row>
)
