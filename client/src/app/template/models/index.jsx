import type from '../types'
import { setTemplate } from '../actions'

export function changeTemplate(name = 'blank') {
    return dispatch => dispatch(setTemplate(name))
}
