import axios from 'axios'
import { API_URL, ADMIN_ROLE, USER, TOKEN_NAME } from 'application/constants'
import { setUser, setRole, contractHasSigned } from 'application/modules/auth/actions'
import { setHeader, post, get } from 'api'
import { toastr } from 'react-redux-toastr'

export const getCurrentUser = () => {
    return dispatch => {
        get(`${API_URL}me`)
        .then(
            response => {
                let userData = response.data.data
                window.sessionStorage.setItem(USER, JSON.stringify(userData))
                dispatch([
                    setUser(userData),
                    setRole(ADMIN_ROLE)
                ])
            }
        )
        .catch(
            err => toastr.error('Houve um problema durante durante a execução', 'Tente novamente mais tarde!')
        )
    }
}

export const signIn = (payload = false) => {
    return dispatch => {
        post(`${API_URL}auth`, payload, false)
        .then(
            response => {
                let { token } = response.data.data
                setHeader(TOKEN_NAME, 'Bearer ' + token)
                dispatch(getCurrentUser())
            }
        )
        .catch(
            err => toastr.error('Houve um problema durante a autenticação', 'Usuário não encontrado ou senha incorreta!')
        )
    }
}
