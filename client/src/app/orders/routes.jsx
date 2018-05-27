import React from 'react'
import Order from './components/order/'
import { Route } from 'react-router'

export const router = (
    <Route>
        <Route path="/orders/:id" component={Order} />
    </Route>
)
