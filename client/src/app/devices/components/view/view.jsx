import React from 'react'
import { Row, Column } from 'html-grid'
import { Link } from 'react-router'

import sitemap from 'sitemap'
import { dateFormat } from 'transformers'

export default props => {
    const { id, name, serial, brand, created_at, updated_at } = props
    return (
        <div page={sitemap.devices_view} edit={sitemap.devices_edit.href + id}>
            <Row>
                <Column mobile={12} tablet={12} desktop={6}>
                    <span>{id}</span>
                    <h1>{name}</h1>
                    <p>{serial}</p>
                    <p>{brand}</p>
                    <p>Registrado em {dateFormat(created_at)}</p>
                    <p>Última atualização {dateFormat(updated_at)}</p>
                </Column>
            </Row>
        </div>
    )
}
