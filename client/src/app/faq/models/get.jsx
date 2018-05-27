import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentFaq, setFaqs, setCategories } from '../actions'

/**
 * Get seller data by id.
 * @param faqId
 */
export function getFaq(faqId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}faqs/${faqId}`
        })
        .then(
            response => dispatch(setCurrentFaq(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}


export function getFaqs() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}faqs`
        })
        .then(
            response => dispatch(setFaqs(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}

export function getCategories() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}faqs/categories`
        })
        .then(
            response => dispatch(setCategories(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}
