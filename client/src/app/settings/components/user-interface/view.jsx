import React from 'react'
import { Row, Column } from 'html-grid'

import Form from './form'
import { tablet as TabletFrame } from 'html-device-frame'
import './styles.css'
import Icon from 'html-icon'

export default props => {
    const { preview } = props
    return (
        <div page={sitemap.settings_seller_ui}>
            <Row>
                <Column mobile={12} tablet={12} desktop={4}>
                    <Form {...props} />
                </Column>
                <Column mobile={12} tablet={12} desktop={8}>
                    <div className="text-right">
                        <TabletFrame>
                            <div className="preview-nav" style={{backgroundColor: preview.primary_background_color, color: preview.primary_text_color}}>
                                <div className="preview-logo">
                                    <img src={preview.logo} alt="" height="48px" />
                                </div>
                                <div className="preview-link">
                                    <Icon name="home" /> home
                                </div>
                                <div className="preview-link">
                                    <Icon name="shopping-cart"/> carrinho de compras
                                </div>
                            </div>
                        </TabletFrame>
                    </div>
                </Column>
            </Row>
        </div>
    )
}
