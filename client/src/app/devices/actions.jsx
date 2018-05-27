import type from './types'

export const setCurrentDevice = (payload = false) => ({
    type: type.DEVICE_FETCHED, payload: payload
})

export const setDevices = (payload = false) => ({
    type: type.DEVICES_FETCHED, payload: payload
})
