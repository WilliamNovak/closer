import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { logger } from 'utils/logger'

const STORAGE_HEADERS_KEY = 'application-custom-headers'

export const initialize = () => {
    logger('api.jsx loaded, initialize called')
    let headers = getStorageHeaders()
    headers && Object.entries(headers).map(h => setHeader(h[0], h[1]))
}

const getStorageHeaders = () => ( window.sessionStorage.getItem(STORAGE_HEADERS_KEY) ? JSON.parse(window.sessionStorage.getItem(STORAGE_HEADERS_KEY)) : false )

export const loadingCalls = (store) => {
    logger('api.jsx loaded, interceptors called')

    axios.interceptors.request.use(
        config => {
            store.dispatch(showLoading())
            return config
        },
        error => Promise.reject(error)
    )

    axios.interceptors.response.use(
        response => {
            store.dispatch(hideLoading())
            return response
        },
        error => {
            store.dispatch(hideLoading())
            return Promise.reject(error)
        }
    )
}

export const setHeader = (key, value) => {
    logger('api.jsx loaded, setHeader called', {key, value})
    let headers = getStorageHeaders()
    if (!headers) { headers = {} }
    Object.assign(headers, {[key]: value})
    window.sessionStorage.setItem(STORAGE_HEADERS_KEY, JSON.stringify(headers))

}

export const clearHeaders = () => {
    logger('api.jsx loaded, clearHeaders called')
    window.sessionStorage.removeItem(STORAGE_HEADERS_KEY)
}

export const post = (url, payload, headers = true) => {
    logger('api.jsx loaded, post called', {payload, headers})
    return axios.post(url, payload, {
        headers: headers && getStorageHeaders()
    })
}

export const put = (url, payload, headers = true) => {
    logger('api.jsx loaded, put called', {payload, headers})
    return axios.post(url, payload, {
        headers: headers && getStorageHeaders()
    })
}

export const get = (url, headers = true) => {
    logger('api.jsx loaded, get called', headers)
    return axios.get(url, {
        headers: headers && getStorageHeaders()
    })
}
