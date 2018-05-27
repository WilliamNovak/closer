import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const updateCampaign = (campaignId, payload = false) => {
    return dispatch => {
        axios({
            method: 'PUT',
            url: `${API_URL}campaigns/${campaignId}/put`,
            data: payload
        })
        .then(
            response => {
                alert('PUT campaign/999/put SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
