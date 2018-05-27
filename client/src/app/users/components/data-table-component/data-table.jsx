import React, { Component } from 'react'
import { Link } from 'react-router'
import sitemap from 'sitemap'
import DataTable from 'datatable'
import { dateFormat } from 'transformers'

export default class UsersDataTable extends Component {

    constructor(props){ super(props) }

    render () {

        const { data, setSelectedUsers } = this.props

        let rows = data
        rows.map((r, i) => rows[i].created_at = dateFormat(r.created_at))

        const properties = {
            data: rows,
            columns: [
                { name: 'id', title: 'ID' },
                { name: 'fullname', title: 'Nome' },
                { name: 'email', title: 'E-mail' },
                { name: 'created_at', title: 'Registro' },
                { name: 'role', title: 'Nível' },
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
            changeSelection={setSelectedUsers}
            />

    }
}
