import React from 'react'
import { Row, Column } from 'html-grid'

import sitemap from 'sitemap'

export default props => {
    const { id, title, brand, category, price, sku, reference } = props
    return (
        <div page={sitemap.products_view} edit={sitemap.products_edit.href + id}>
            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <h1>#{id} {title}</h1>
                    <p><strong>sku: {sku}</strong></p>
                    <p>Ref.: {reference}</p>
                    <p>Marca {brand}</p>
                    <p>Categoria {category}</p>
                    <p>Preço {price}</p>
                </Column>
            </Row>
        </div>
    )
}
