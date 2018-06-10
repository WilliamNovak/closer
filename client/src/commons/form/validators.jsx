import React from 'react'

export const required = value => value ? undefined : 'obrigatório'

export const mobileNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Número de celular inválido.'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{8})$/i.test(value)
    ? 'Número de telefone inválido.'
    : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'E-mail inválido'
    : undefined

export const onlyNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Apenas números.'
    : undefined
