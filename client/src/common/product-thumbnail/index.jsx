import React from 'react'
import Icon from 'html-icon'

/**
 * Product Thumbnail Link (component).
 *
 * @param id
 * @param image
 * @param title
 * @param price
 * @param sku
 */
export default props => (
    <div className="notification">
        <img src={props.image} alt={props.title} height="80px" />
        <div className="has-text-centered">
            <strong>{props.title}</strong>
            <br />
            <small>SKU: {props.sku}</small>
        </div>
        <div className="has-text-centered">
            R$ {props.price}
        </div>
    </div>
)
