import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentLogistic, setLogistics, logisticsIndicatorsHasUpdated } from '../actions'

/**
 * Get logistic data by id.
 * @param logisticId
 */
export function getLogistic(logisticId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}logistics/${logisticId}`
        })
        .then(
            response => dispatch(setCurrentLogistic(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get logistics data.
 */
export function getLogistics() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}logistics`
        })
        .then(
            response => dispatch(setLogistics(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}


/**
 * Get all indicators to view on Logistics Page.
 */
export function getLogisticsIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}logistics/indicators`
        })
        .then(
            response => {
                let indicatorData = response.data.data[0]
                dispatch([
                    logisticsIndicatorsHasUpdated(),
                    setLogisticsIndicatorTop(indicatorData.top)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}
