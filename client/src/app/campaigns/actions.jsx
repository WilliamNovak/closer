import type from './types'

export const setCurrentCampaign = (payload = false) => ({
    type: type.CAMPAIGN_FETCHED, payload: payload
})

export const setCampaigns = (payload = false) => ({
    type: type.CAMPAIGNS_FETCHED, payload: payload
})
