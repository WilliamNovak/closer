import React, { Component } from 'react'
import { Link } from 'react-router'
import sitemap from 'sitemap'
import DataTable from 'datatable'
import { dateFormat } from 'transformers'

export default class SellersDataTable extends Component {

    constructor(props){ super(props) }

    render () {

        const { data, setSelectedSellers } = this.props

        let rows = data
        rows.map((r, i) => rows[i].created_at = dateFormat(r.created_at))

        const properties = {
            data: rows,
            columns: [
                { name: 'id', title: 'ID' },
                { name: 'name', title: 'Razão Social' },
                { name: 'score', title: 'Score' },
                { name: 'stores', title: 'Lojas' },
                { name: 'orders_number', title: 'Pedidos' },
                { name: 'orders_total', title: 'Total' },
                { name: 'created_at', title: 'Registro' },
                { name: 'view', title: 'Visualizar' }
            ],
            sortingCols: [
                { columnName: 'id', direction: 'desc' },
                { columnName: 'created_at', direction: 'desc' }
            ],
            groupCols: false,
            action: {
                view: sitemap.sellers_view.href,
                edit: false
            }
        }

        return <DataTable
            {...properties}
            changeSelection={setSelectedSellers}
            />

    }
}
