import React, { Component } from 'react'
import { Link } from 'react-router'
import sitemap from 'sitemap'
import DataTable from 'datatable'
import { Thumbnail } from 'datatable-utils'
import { dateFormat } from 'transformers'

export default class ProductsDataTable extends Component {

    constructor(props){ super(props) }

    render () {

        const { data, setSelectedCampaigns } = this.props

        let rows = data
        data.map((p, i) => rows[i].created_at = dateFormat(rows[i].created_at))

        const properties = {
            data: rows,
            columns: [
                { name: 'id', title: 'ID' },
                { name: 'name', title: 'Campanha' },
                { name: 'created_at', title: 'Ínicio' },
                { name: 'view', title: 'Visualizar' }
            ],
            sortingCols: [
                { columnName: 'id', direction: 'desc' },
                { columnName: 'created_at', direction: 'asc' }
            ],
            groupCols: false,
            action: {
                view: sitemap.campaigns_view.href,
                edit: false
            }
        }

        return <DataTable
            {...properties}
            changeSelection={setSelectedCampaigns}
            />

    }
}
