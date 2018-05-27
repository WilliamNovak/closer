import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'
import { setCurrentCampaign, setCampaigns } from '../actions'

/**
 * Get seller data by id.
 * @param campaignId
 */
export function getCampaign(campaignId = 0) {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}campaigns/${campaignId}`
        })
        .then(
            response => dispatch(setCurrentCampaign(response.data.data[0]))
        )
        .catch(
            err => {}
        )
    }
}

/**
 * Get campaign data.
 */
export function getCampaigns() {
    return dispatch => {
        axios({
            method: 'GET',
            url: `${API_URL}campaigns`
        })
        .then(
            response => dispatch(setCampaigns(response.data.data))
        )
        .catch(
            err => {}
        )
    }
}
