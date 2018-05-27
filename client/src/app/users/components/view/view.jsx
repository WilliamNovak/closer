import React from 'react'
import { Row, Column } from 'html-grid'
import { Link } from 'react-router'

import sitemap from 'sitemap'
import Icon from 'html-icon'

export default props => {
    const { id, first_name, last_name, email, seller } = props
    return (
        <div page={sitemap.users_edit} edit={sitemap.users_edit.href + id}>

            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <span>{id}</span>
                    <h1>{first_name} {last_name}</h1>
                    <p>{email}</p>
                    <p>
                        <Link to={sitemap.sellers_view.href + seller.id}>
                            <Icon name="home" />{seller.name}
                        </Link>
                    </p>
                </Column>
            </Row>
        </div>
    )
}
