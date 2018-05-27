import React, { Component } from 'react'
import { Link } from 'react-router'
import sitemap from 'sitemap'
import DataTable from 'datatable'
import { dateFormat } from 'transformers'

export default class MailsDataTable extends Component {

    constructor(props){ super(props) }

    render () {

        const { data, setSelectedMails } = this.props

        let rows = data
        rows.map((r, i) => rows[i].created_at = dateFormat(r.created_at))
        rows.map((r, i) => rows[i].updated_at = dateFormat(r.updated_at))

        const properties = {
            data: rows,
            columns: [
                { name: 'id', title: 'ID' },
                { name: 'name', title: 'Nome' },
                { name: 'category', title: 'Categoria' },
                { name: 'created_at', title: 'Registro' },
                { name: 'updated_at', title: 'Atualizado' },
                { name: 'view', title: 'Visualizar' }
            ],
            sortingCols: [
                { columnName: 'id', direction: 'desc' },
                { columnName: 'created_at', direction: 'desc' }
            ],
            groupCols: false,
            action: {
                view: sitemap.mail_view.href,
                edit: false
            }
        }

        return <DataTable
            {...properties}
            changeSelection={setSelectedMails}
            />

    }
}
