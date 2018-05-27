import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentFinance, setFinances, setFinanceIndicator, financesIndicatorsHasUpdated } from '../actions'

/**
 * Get finance data by id.
 * @param financeId
 */
export function getFinance(financeId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}finances/${financeId}`
        })
        .then(
            response => dispatch(setCurrentFinance(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get finance data.
 */
export function getFinances() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}finances`
        })
        .then(
            response => dispatch(setFinances(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}



/**
 * Get all indicators to view on Finance Page.
 */
export function getFinanceIndicators() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}finances/indicators`
        })
        .then(
            response => {
                let i = response.data.data[0]
                dispatch([
                    financesIndicatorsHasUpdated(),
                    setFinanceIndicator(type.FINANCES_PROFIT_INDICATOR, i.profit)
                ])
            }
        )
        .catch(
            err => {}
        )
    }
}
