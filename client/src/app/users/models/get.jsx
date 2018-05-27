import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentUser, setUsers, setUserIndicator, usersIndicatorsHasUpdated } from '../actions'

/**
 * Get user data by id.
 * @param userId
 */
export function getUser(userId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}users/${userId}`
        })
        .then(
            response => dispatch(setCurrentUser(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get user data.
 */
export function getUsers() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}users`
        })
        .then(
            response => dispatch(setUsers(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}



/**
 * Get all indicators to view on User Page.
 */
export function getUserIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}users/indicators`
        })
        .then(
            response => {
                let i = response.data.data[0]
                dispatch([
                    usersIndicatorsHasUpdated(),
                    setUserIndicator(type.USERS_TOTAL_INDICATOR, i.total)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}
