import React from 'react'
import { Row, Column } from 'html-grid'

import sitemap from 'sitemap'

export default props => {
    const { id, name, fantasyname, cnpj, email, mobile } = props
    return (
        <div page={sitemap.sellers_view} register={sitemap.sellers_register} edit={sitemap.sellers_edit.href + id}>

            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <span>{id}</span>
                    <h1>{name}</h1>
                    <p>{fantasyname}</p>
                    <p>{cnpj}</p>
                    <p>{mobile}</p>
                </Column>
            </Row>
        </div>
    )
}
