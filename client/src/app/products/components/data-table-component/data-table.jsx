import React, { Component } from 'react'
import { Link } from 'react-router'
import sitemap from 'sitemap'
import DataTable from 'datatable'
import { Thumbnail } from 'datatable-utils'

export default class ProductsDataTable extends Component {

    constructor(props){ super(props) }

    render () {

        const { data, setSelectedProducts } = this.props

        let rows = data
        data.map((p, i) => rows[i].thumbnail = <Thumbnail src={p.thumbnail} />)

        const properties = {
            data: rows,
            columns: [
                { name: 'id', title: 'ID' },
                { name: 'thumbnail', title: 'Miniatura' },
                { name: 'title', title: 'Produto' },
                { name: 'brand', title: 'Marca' },
                { name: 'price', title: 'Preço' },
                { name: 'view', title: 'Visualizar' }
            ],
            sortingCols: [
                { columnName: 'id', direction: 'desc' },
                { columnName: 'price', direction: 'asc' }
            ],
            groupCols: false,
            action: {
                view: sitemap.products_view.href,
                edit: false
            }
        }

        return <DataTable
            {...properties}
            changeSelection={setSelectedProducts}
            />

    }
}
