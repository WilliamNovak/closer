import type from './types'
import axios from 'axios'
import { API_URL } from 'constants'

export const indicatorRequest = (route) => axios({
    method: 'GET',
    url: `${API_URL}indicators/${route}`
})
