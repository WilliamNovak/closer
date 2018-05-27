import React, { Component } from 'react'
import { Link } from 'react-router'
import sitemap from 'sitemap'
import DataTable from 'datatable'
import { dateFormat } from 'transformers'

export default class FinancesDataTable extends Component {

    constructor(props){ super(props) }

    render () {

        const { data, setSelectedFinances } = this.props

        let rows = data
        rows.map(
            (r, i) => {
                rows[i].created_at = dateFormat(r.created_at)
                rows[i].deadline_at = dateFormat(r.deadline_at)
            }
        )

        const properties = {
            data: rows,
            columns: [
                { name: 'id', title: 'ID' },
                { name: 'product', title: 'Produto' },
                { name: 'status', title: 'Status' },
                { name: 'created_at', title: 'Registro' },
                { name: 'deadline_at', title: 'Entrega' },
                { name: 'nfe', title: 'NFE' },
                { name: 'order', title: 'Pedido' },
                { name: 'action', title: '' }
            ],
            sortingCols: [
                { columnName: 'id', direction: 'desc' },
                { columnName: 'created_at', direction: 'desc' },
                { columnName: 'deadline_at', direction: 'desc' }
            ],
            groupCols: false,
            action: sitemap.finances_view.href
        }

        return <DataTable
            {...properties}
            changeSelection={setSelectedFinances}
            />

    }
}
