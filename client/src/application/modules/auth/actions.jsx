import type from 'application/modules/auth/types'
import { USER } from 'application/constants'

export const signOut = () => ({
    type: type.AUTH_USER_WAS_SIGNED_OUT,
    payload: false
})

export const setUser = (user = false) => ({
    type: type.AUTH_USER_WAS_SIGNED_IN,
    payload: user
})

export const setRole = (role = null) => ({
    type: type.AUTH_USER_SIGNED_IN_ROLE_WAS_SETTED,
    payload: role
})

export const setUserFromSession = () => {
    return dispatch => {
        let user = window.sessionStorage.getItem(USER)
        user && dispatch(setUser(JSON.parse(user)))
        dispatch({
            type: type.AUTH_SET_USER_FROM_SESSION
        })
    }
}

export const removeSessionUser = () => {
    return dispatch => {
        let user = window.sessionStorage.getItem(USER)
        console.log(user)
        user && window.sessionStorage.removeItem(USER)
        dispatch({
            type: type.AUTH_USER_SESSION_KEY_WAS_CLEAR
        })
    }
}
