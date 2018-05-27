import React from 'react'

import { Card } from 'html-component'
import { Row, Column } from 'html-grid'
import { Link } from 'react-router'
import Icon from 'html-icon'
import sitemap from 'sitemap'
import FaqPanel from 'module-faq/components/panel-component'
import Tickets from 'module-support/components/tickets-table-component'

export default props => {
    const { seller, ka } = props
    return (
        <div page={sitemap.support_index} register={sitemap.support_register}>

            <Row>
                <Column mobile={12} tablet={12} desktop={8}>
                    <div className="section-title">
                        <Icon name="question" /> Dúvidas frequentes
                    </div>
                    <div className="title-base" />

                        <FaqPanel />

                </Column>
                <Column mobile={12} tablet={12} desktop={4}>

                    <div className="section-title">
                        <Icon name="smile-o" /> Key Account
                    </div>
                    <div className="title-base" />

                    <Card>
                        <div className="ka-user-name">
                            {ka.name}
                        </div>
                        <div className="ka-meta-item">
                            <Icon name="mobile" /> {ka.mobile}
                        </div>
                        <div className="ka-meta-item">
                            <Icon name="phone" /> {ka.phone}
                        </div>
                        <div className="ka-meta-item">
                            <Icon name="mail" /> {ka.email}
                        </div>
                    </Card>
                </Column>
            </Row>

            <br />

            <Row>
                <Column mobile={12} tablet={12} desktop={12}>
                    <div className="section-title">
                        <Icon name="ticket" /> Chamados
                    </div>
                    <div className="title-base" />
                    <Tickets />
                </Column>
            </Row>

        </div>
    )
}
