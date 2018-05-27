import type from './types'

const INITIAL_STATE = {
    current: false,
    data: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // Set current seller.
        case type.DEVICE_FETCHED:
            return { ...state, current: action.payload }

        // Set device.
        case type.DEVICES_FETCHED:
            return { ...state, data: action.payload }
        default:
            return state
    }
}
