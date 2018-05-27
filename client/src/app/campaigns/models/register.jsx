import type from '../types'
import axios from 'axios'
import { API_URL } from 'constants'

/**
 * Register seller.
 * @param payload
 */
export const registerCampaign = (payload = false) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `${API_URL}campaigns/post`,
            data: payload
        })
        .then(
            response => {
                alert('POST campaign/post SUCCESSFUL')
            }
        )
        .catch(
            err => {}
        )
    }
}
