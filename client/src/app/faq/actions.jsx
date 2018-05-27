import type from './types'

export const setCurrentFaq = (payload = false) => ({
    type: type.FAQ_FETCHED, payload: payload
})

export const setFaqs = (payload = false) => ({
    type: type.FAQS_FETCHED, payload: payload
})

export const setCategories = (payload = false) => ({
    type: type.FAQ_CATEGORIES_FETCHED, payload: payload
})
