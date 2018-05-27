import React, { Component } from 'react'
import { Link } from 'react-router'
import { Card } from 'html-component'

import {
    SelectionState,
    PagingState,
    IntegratedPaging,
    IntegratedSelection,
    SortingState,
    IntegratedSorting,
    SearchState,
    IntegratedFiltering,
    GroupingState,
    IntegratedGrouping,
    CustomPaging
} from '@devexpress/dx-react-grid'
import {
    Grid,
    Table,
    TableHeaderRow,
    TableSelection,
    PagingPanel,
    Toolbar,
    SearchPanel,
    GroupingPanel,
    TableGroupRow
} from '@devexpress/dx-react-grid-bootstrap4'

import Icon from 'html-icon'

const getRowId = row => row.id

const Loading = props => (<div>Carregando...</div>)

/**
 *
 * @param data              [array|false]]
 * @param action            [array|false]
 * @param columns           [array|false]]
 * @param sortingCols       [array|false]]
 * @param groupCols         [array|false]
 * @param changeSelection   [function]
 */
export default class DataTableComponent extends Component {

    constructor(props) {
        super(props)

        const { data, columns, sortingCols, groupCols, action, changeSelection } = this.props

        let rows = data

        if (action.view) {
            rows.map((row, i) => rows[i].view = <Link to={this.props.action.view + row.id}><Icon name="eye" /></Link>)
        }

        if (action.edit) {
            rows.map((row, i) => rows[i].edit = <Link to={this.props.action.edit + row.id}><Icon name="pencil" /></Link>)
        }

        this.state = {
            rows: rows,
            columns: columns,
            sorting: sortingCols ? sortingCols : false,
            selection: [],
            defaultGroupingColumn: groupCols ? groupCols : false,
            totalCount: rows.length,
            pageSize: 5,
            pageSizes: [5, 10, 20, 50],
            currentPage: 0,
            loading: false
        }

        this.changeSelection = selection => {
            this.setState({ selection })
            changeSelection(selection)
        }

        this.changeCurrentPage = this.changeCurrentPage.bind(this)
        this.changePageSize = this.changePageSize.bind(this)

        this.changeSorting = sorting => this.setState({ sorting })
    }

    changeSorting = (sorting) => this.setState({ sorting })

    changeCurrentPage = (currentPage) => this.setState({currentPage})

    changePageSize = (pageSize) => {
        const totalPages = Math.ceil(this.state.totalCount / pageSize)
        const currentPage = Math.min(this.state.currentPage, totalPages - 1)
        this.setState({
            pageSize,
            currentPage
        })
    }

    render () {

        const { rows, columns, selection, sorting,
            defaultGroupingColumn,
            pageSize,
            pageSizes,
            currentPage,
            totalCount,
            loading
        } = this.state

        return (
            <div>

                <Card nopadding style={{ position: 'relative' }}>
                    <div className="datable">
                        <Grid rows={rows} columns={columns} getRowId={getRowId}>
                            <SearchState />
                            <IntegratedFiltering />
                                <PagingState
                                   currentPage={currentPage}
                                   onCurrentPageChange={this.changeCurrentPage}
                                   pageSize={pageSize}
                                   onPageSizeChange={this.changePageSize}
                                />
                                <CustomPaging
                                   totalCount={totalCount}
                                />
                            <SortingState sorting={sorting} onSortingChange={this.changeSorting} />
                            { defaultGroupingColumn && <GroupingState defaultGrouping={defaultGroupingColumn} /> }
                            <SelectionState selection={selection} onSelectionChange={this.changeSelection} />
                            <IntegratedPaging />
                            <IntegratedSelection />
                            <IntegratedSorting />
                            { defaultGroupingColumn && <IntegratedGrouping /> }
                            <Table />
                            <TableHeaderRow showSortingControls />
                            { defaultGroupingColumn &&  <TableGroupRow /> }
                            <TableSelection showSelectAll />
                            <Toolbar />
                            <SearchPanel messages={{searchPlaceholder: "Pesquisar por..."}} />
                            { defaultGroupingColumn && <GroupingPanel showSortingControls /> }
                        </Grid>
                    </div>
                    {loading && <Loading />}
                </Card>

                {
                // <br />
                //
                // <p>
                //     <small>
                //         Selecionado(s): {selection.length}
                //     </small>
                // </p>
                }

            </div>
        )
    }
}
