import React from 'react'

import { Card, Breadcrumbs, Progress, ProgressBar } from 'html-component'
import { Row, Column } from 'html-grid'

const sku = (skus, sku) => skus.filter(skuObj => skuObj.sku === sku ? skuObj : null )

/*
 * Order component.
 */
export default props => (
    <div page="orders">

        <Breadcrumbs pages={[
            { linkTo: '#dashboard/home', label: 'Dashboard' },
            { linkTo: '#dashboard/orders', label: 'Pedidos' },
            { linkTo: null, label: 'Informações do pedido' }
        ]} />

        <Row>
            <Column mobile={12} tablet={8} desktop={8}>
                <h1>Pedido {props.id_pedido}</h1>
                Registrado em <span><strong>{props.data_criacao}</strong></span><br />
                Ultima atualização em <span><strong>{props.ultima_atualizacao}</strong></span>
            </Column>
            <Column mobile={12} tablet={4} desktop={4}>
                <div className="text-right">
                    <Card modifier="dark">
                        Subtotal <strong>R$ {props.subtotal}</strong><br />
                        Frete <strong>R$ {props.frete}</strong><br />
                        <h3><small>Total</small> <strong>R$ {props.total}</strong></h3>
                    </Card>
                </div>
            </Column>
        </Row>

        <br />

        <Row>
            <Column>

                <p>Produtos</p>
                {
                    props.skus.map(
                        sku =>
                        <Card>
                            <Row>
                                <Column mobile={12} tablet={8}>
                                    <strong>
                                        {sku.nome}
                                    </strong>
                                    <Row>
                                        <Column mobile={12} tablet={4} desktop={4}>
                                            Valor unitário <strong>R$ {sku.valor_unitario}</strong>
                                        </Column>
                                        <Column mobile={12} tablet={4} desktop={4}>
                                            Quantidade <strong>{parseInt(sku.quantidade)}</strong>
                                        </Column>
                                        <Column mobile={12} tablet={4} desktop={4}>
                                            Total <strong>R$ {sku.total}</strong>
                                        </Column>
                                    </Row>
                                </Column>
                                <Column mobile={12} tablet={4}>
                                    <Progress>
                                        <ProgressBar value={30} max={100} />
                                    </Progress>
                                    <strong>em transporte</strong>
                                </Column>
                            </Row>
                        </Card>
                    )
                }

            </Column>
        </Row>

        <hr />

        <Row>
            <Column mobile={12} tablet={4} desktop={4}>
                <Card title="Cliente">
                    Nome <strong>{props.comprador.nome}</strong><br />
                    E-mail <strong>williamnvk@gmail.com</strong><br />
                    {/*<strong>{props.comprador.email}</strong><br />*/}
                    Telefone <strong>{props.comprador.telefone}</strong><br />
                    CPF/CNPJ <strong>{props.comprador.documento}</strong>
                </Card>
            </Column>
            <Column mobile={12} tablet={4} desktop={4}>
                <Card title="Forma de pagamento">

                </Card>
            </Column>
            <Column mobile={12} tablet={4} desktop={4}>
                <Card title="Endereço de Entrega">
                    <strong>{props.dados_entrega.nome}</strong><br />
                    {props.dados_entrega.logradouro}, {props.dados_entrega.numero} - {props.dados_entrega.complemento} - {props.dados_entrega.bairro}<br />
                    {props.dados_entrega.cep} - {props.dados_entrega.cidade} - {props.dados_entrega.uf}<br />
                    {props.dados_entrega.telefone}
                </Card>
            </Column>
        </Row>


    </div>

)
