import axios from 'axios'
import { API_URL } from 'constants'
import { setToken, setUser, contractHasSigned } from '../actions'

/**
 * Get user by token.
 * @param token
 */
export const getUserByToken = (token = 0) => {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}users/${token}`
        })
        .then(
            response => {
                let userData = response.data.data[0]
                dispatch(setUser(userData))
            }
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Sign in.
 * @param payload
 */
export const signIn = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}auth`,
            data: payload
        })
        .then(
            response => {
                let authData = response.data.data[0]
                let token = authData.token
                dispatch([
                    setToken(token),
                    getUserByToken(token)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Sign up.
 * @param payload
 */
export const signUp = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}register`,
            data: payload
        })
        .then(
            response => {
                let authData = response.data.data[0]
                let token = authData.token
                dispatch([
                    setToken(token),
                    getUserByToken(token)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Sign contract.
 * @param payload
 */
export const signContract = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}sign/contract`,
            data: payload
        })
        .then(
            response => {
                dispatch(contractHasSigned())
            }
        )
        .catch(
            err => {}
        )
    }
}
