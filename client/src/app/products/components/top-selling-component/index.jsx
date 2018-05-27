import React, { Component } from 'react'
import Icon from 'html-icon'
import './styles.css'

export default props => {

    let products = []

    if (props.data) {
        products = props.data.map(
        (p,i) =>
            <div key={"products-top-selling-id-" + p.id} className={"product-top-selling-item " + ( i === 0 ? 'is-first' : null )}>
                <div className="product-image">
                    <img src={p.image} alt="" />
                </div>
                <div className="product-content">
                    <div className="product-title">
                        {p.title}
                    </div>
                    <div className="product-meta">
                        <span>SKU</span>{p.sku}
                    </div>
                    <div className="product-meta">
                        <span>Valor médio de venda</span>{p.price}
                    </div>
                    <div className="product-meta">
                        <span>Número de pedidos</span>{p.orders}
                    </div>
                </div>
            </div>
        )
    }

    if ( products.length > 0) {
        return (
            <div className="product-top-selling">
                <div className="section-title">
                    <Icon name="cart-plus" /> Produtos mais vendidos
                </div>
                <div className="title-base"/>

                {products}

            </div>
        )
    }

    return <div />
}
