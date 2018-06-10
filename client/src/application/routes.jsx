import React from 'react'
import { Router, Redirect, hashHistory } from 'react-router'

import { router as routesAuth } from 'application/modules/auth/routes'

const routes = () => (
    <Router history={hashHistory}>
        {routesAuth}
        <Redirect from="*" to="/" />
    </Router>
)

export default routes
