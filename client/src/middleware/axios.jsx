import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export const interceptors = (store) => {
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
