import React from 'react'
import { Row, Column } from 'html-grid'
import { Link } from 'react-router'

import sitemap from 'sitemap'
import Icon from 'html-icon'
import { dateFormat } from 'transformers'

export default props => {
    const { id, name, description, category, created_at, updated_at } = props
    return (
        <div page={sitemap.mail_view} edit={sitemap.mail_edit.href + id}>

            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <span>{id}</span>
                    <h1>{name}</h1>

                    <p>registrado em {dateFormat(created_at)}</p>
                    <p>ultima atualização em {dateFormat(updated_at)}</p>

                    <p>categoria {category}</p>
                    <p>{description}</p>
                </Column>
            </Row>
        </div>
    )
}
