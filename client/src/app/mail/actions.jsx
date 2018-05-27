import type from './types'

export const setCurrentMail = (payload = false) => ({
    type: type.MAIL_FETCHED, payload: payload
})

export const setMails = (payload = false) => ({
    type: type.MAILS_FETCHED, payload: payload
})

export const setCategories = (payload = false) => ({
    type: type.MAIL_CATEGORIES_FETCHED, payload: payload
})
