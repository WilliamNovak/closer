import React from 'react'
import { CounterIndicator, ChartIndicator } from 'html-indicator-card'
import ProductThumbnail from 'html-product-thumbnail'
import { Card } from 'html-component'
import { Row, Column } from 'html-grid'
import Transport from '../logistics/cards/transport'
import Status from '../orders/cards/status'
import { BarChart, RadarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
Radar, PolarGrid, PolarRadiusAxis, PolarAngleAxis, AreaChart, Area } from 'recharts'
import sitemap from 'sitemap'



import Products from 'module-products/components/data-table-component'

export default props => (
    <div>

        {/*
        <Card modifier="primary" nopadding>
            <AreaChart width={1110} height={320} data={
                [
                    {name: 'Fevereiro', uv: 2500},
                    {name: 'Março', uv: 800},
                    {name: 'Abril', uv: 2000},
                    {name: 'Maio', uv: 3210},
                ]} >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#444' fill='#222' />
            </AreaChart>
        </Card>
        */}



        <Row>
            <Column>
                <CounterIndicator icon="files-o" title="Lojístas" modifier="primary" key="admin-sellers">
                    {props.indicators.adminSellers}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="files-o" title="total de pedidos" modifier="success" key="admin-sellers">
                    <small>R$</small> {props.indicators.adminInvoiced}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="files-o" title="total de pedidos" modifier="primary" key="admin-order">
                    {props.indicators.adminOrder}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="caret-up" title="markup produtos" modifier="warning" key="admin-markup">
                    {props.indicators.adminMarkup} <small>%</small>
                </CounterIndicator>
            </Column>
        </Row>

        <Row>
            <Column>
                <CounterIndicator icon="bar-chart" title="faturado financeiro" modifier="success" key="admin-billed">
                    <small>R$</small> {props.indicators.adminBilled}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="files-o" title="Receita" modifier="success" key="admin-recipe">
                    <small>R$</small> {props.indicators.adminRecipe}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="caret-up" title="Despesas" modifier="danger" key="admin-expenses">
                    <small>R$</small> {props.indicators.adminExpenses}
                </CounterIndicator>
            </Column>
            <Column>
                ...
            </Column>
        </Row>

        <Row>
            <Column mobile={12} tablet={12} desktop={5}>
                {
                // <Card title="Logística" className="mb-4">
                //     <Transport
                //         shipped={props.indicators.adminTransportShipped}
                //         origin={props.indicators.adminTransportOrigin}
                //         receiver={props.indicators.adminTransportReceiver}
                //         inTransport={props.indicators.adminTransportInTransport}
                //         delivered={props.indicators.adminTransportDelivered}
                //         />
                // </Card>
                }
            </Column>
            <Column mobile={12} tablet={12} desktop={7}>
                {
                // <Card title="Status dos pedidos">
                //     <br />
                //     <Status
                //         new={props.indicators.adminOrdersNew}
                //         pending={props.indicators.adminOrdersPending}
                //         late={props.indicators.adminOrdersLate}
                //         canceled={props.indicators.adminOrdersCanceled}
                //         delivered={props.indicators.adminOrdersDelivered}
                //         />
                // </Card>
                }
            </Column>
            <Column mobile={12} tablet={12} desktop={6}>

                    <ChartIndicator icon="bar-chart" title="faturado financeiro" modifier="success" key="admin-billed">
                        <BarChart width={495} height={280} data={
                            [
                                {name: 'novos', A: props.indicators.adminOrdersNew},
                                {name: 'cancelados', A: props.indicators.adminOrdersCanceled},
                                {name: 'atrasados', A: props.indicators.adminOrdersLate},
                                {name: 'pendentes', A: props.indicators.adminOrdersPending},
                                {name: 'entregues', A: props.indicators.adminOrdersDelivered},
                                {name: 'outros 1', A: props.indicators.adminOrdersNew},
                                {name: 'mais cancelados', A: props.indicators.adminOrdersCanceled},
                                {name: 'mais atrasados', A: props.indicators.adminOrdersLate},
                                {name: 'mais pendentes', A: props.indicators.adminOrdersPending},
                                {name: 'mais entregues', A: props.indicators.adminOrdersDelivered, fullMark: 100}
                            ]}>
                           <Tooltip/>
                           <Bar dataKey="A" fill="#3b74ce" stroke="inherit" />
                        </BarChart>
                    </ChartIndicator>
            </Column>
            <Column mobile={12} tablet={12} desktop={6}>
                <Card title="Status dos pedidos">
                    <RadarChart width={480} height={280} data={
                        [
                            {name: 'novos', A: props.indicators.adminOrdersNew, fullMark: 100},
                            {name: 'cancelados', A: props.indicators.adminOrdersCanceled, fullMark: 100},
                            {name: 'atrasados', A: props.indicators.adminOrdersLate, fullMark: 100},
                            {name: 'pendentes', A: props.indicators.adminOrdersPending, fullMark: 100},
                            {name: 'entregues', A: props.indicators.adminOrdersDelivered, fullMark: 100}
                        ]} >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis/>
                        <Tooltip/>
                        <Legend />
                        <Radar name="novos" dataKey="A" stroke="#8884d8" fill="#3b74ce" fillOpacity={0.6}/>
                    </RadarChart>
                </Card>
            </Column>
        </Row>

        <Row>
            <Column>

            </Column>
        </Row>

    </div>

)
