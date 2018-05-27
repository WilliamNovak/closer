import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentMail, setMails, setCategories } from '../actions'

/**
 * Get seller data by id.
 * @param mailId
 */
export function getMail(mailId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}mails/${mailId}`
        })
        .then(
            response => dispatch(setCurrentMail(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}


export function getMails() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}mails`
        })
        .then(
            response => dispatch(setMails(response.data.data))
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
            url: `${API_URL}mails/categories`
        })
        .then(
            response => dispatch(setCategories(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}
