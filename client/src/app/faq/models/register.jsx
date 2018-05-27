import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const registerFaq = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}faqs/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST faq/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
