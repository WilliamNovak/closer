import React from 'react'

import { Row, Column } from 'html-grid'
import sitemap from 'sitemap'
import CheckoutForm from 'module-settings/components/checkout-form'

export default props => (
    <div page={sitemap.settings_index}>

        <Row>
            <Column>

                <h1>Checkout</h1>

                <CheckoutForm onUpdateCheckout={props.onUpdateCheckout} />

            </Column>
        </Row>

    </div>

)
