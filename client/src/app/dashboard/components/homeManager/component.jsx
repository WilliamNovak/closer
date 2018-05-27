import React from 'react'
import { CounterIndicator } from 'html-indicator-card'
import ProductThumbnail from 'html-product-thumbnail'

import { Card, Progress, ProgressBar } from 'html-component'
import { Row, Column } from 'html-grid'
import sitemap from 'sitemap'

export default props => (
    <div>

        <Row>
            <Column>
                <CounterIndicator icon="list-ul" title="precificação/catalogo" key="total-catalogo">
                    <div>
                        {props.indicators.catalog}/{props.indicators.priced}
                    </div>
                    <Progress>
                        <ProgressBar value={props.indicators.priced} max={props.indicators.catalog} />
                    </Progress>
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="bar-chart" title="faturado em vendas" key="total-faturado">
                    <small>R$</small> {props.indicators.billed}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="files-o" title="total de pedidos" key="total-pedidos">
                    {props.indicators.orders}
                </CounterIndicator>
            </Column>
            <Column>
                <CounterIndicator icon="caret-up" title="markup produtos" key="total-markup">
                    {props.indicators.markup}%
                </CounterIndicator>
            </Column>
        </Row>

        <Row>
            <Column>
                <Card title="Mais ventidos Rede Home">
                    {
                        props.collections.myTopSellingProducts ?
                        <div>
                            <Row>
                                {props.collections.myTopSellingProducts.map(
                                    myProduct => <Column>
                                        <ProductThumbnail {...myProduct} key={"my-top-selling-product-id-" + myProduct.id} />
                                    </Column>
                                )}
                            </Row>
                            <br />
                            <Row>
                                <Column>
                                    <a href="#" className="card-link">ver +</a>
                                </Column>
                            </Row>
                        </div>
                        : ''
                    }
                </Card>
            </Column>
            <Column>
                <Card title="Mais vendidos Loja">
                    {
                        props.collections.allTopSellingProducts ?
                        <Row>
                            {props.collections.allTopSellingProducts.map(
                                allProduct => <Column>
                                    <ProductThumbnail {...allProduct} key={"all-top-selling-product-id-" + allProduct.id} />
                                </Column>
                            )}
                        </Row>
                        : ''
                    }
                </Card>
            </Column>
        </Row>

    </div>

)
