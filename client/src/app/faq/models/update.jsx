import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const updateFaq = (faqId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}faqs/${faqId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT faq/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
