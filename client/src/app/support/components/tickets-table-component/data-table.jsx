import React, { Component } from 'react'
import { Link } from 'react-router'
import sitemap from 'sitemap'
import DataTable from 'datatable'
import { dateFormat } from 'transformers'

export default class TicketsDataTable extends Component {

    constructor(props){ super(props) }

    render () {

        const { data, setSelectedTicket } = this.props

        let rows = data
        rows.map((r, i) => rows[i].created_at = dateFormat(r.created_at))

        const properties = {
            data: rows,
            columns: [
                { name: 'id', title: 'Protocolo' },
                { name: 'created_at', title: 'Aberto em' },
                { name: 'name', title: 'Nome' },
                { name: 'title', title: 'Título' },
                { name: 'status', title: 'Status' },
                { name: 'view', title: 'Visualizar' }
            ],
            sortingCols: [
                { columnName: 'id', direction: 'desc' },
                { columnName: 'created_at', direction: 'desc' }
            ],
            groupCols: false,
            action: {
                view: sitemap.users_view.href,
                edit: false
            }
        }

        return <DataTable
            {...properties}
            changeSelection={setSelectedTicket}
            />

    }
}
