import type from '../types'
import { setCurrentPage } from '../actions'

export function changePage(page = false) {
    return dispatch => dispatch(setCurrentPage(page))
}
