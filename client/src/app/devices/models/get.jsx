import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentDevice, setDevices } from '../actions'

/**
 * Get seller data by id.
 * @param deviceId
 */
export function getDevice(deviceId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}devices/${deviceId}`
        })
        .then(
            response => dispatch(setCurrentDevice(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get device data.
 */
export function getDevices() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}devices`
        })
        .then(
            response => dispatch(setDevices(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}
