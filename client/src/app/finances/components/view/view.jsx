import React from 'react'
import { Row, Column } from 'html-grid'

import sitemap from 'sitemap'
import { dateFormat } from 'transformers'

export default props => {
    const {
        id,
        status,
        user,
        created_at,
        deadline_at,
        product,
        nfe,
        order
     } = props
    return (
        <div page={sitemap.finances_index} register={sitemap.finances_register}>
            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <span>{id}</span>
                    <h1>#{order}</h1>
                    <h3>{product}</h3>
                    <p>status {status}</p>
                    <p>registrado em {dateFormat(created_at)}</p>
                    <p>entrega prevista para {dateFormat(deadline_at)}</p>
                    <p>pedido # {order}</p>
                    <p>responsável # {user}</p>
                    <p>nfe {nfe}</p>
                </Column>
            </Row>
        </div>
    )
}
