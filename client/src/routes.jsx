import React from 'react'
import { Router, Redirect, hashHistory } from 'react-router'

import { router as routesAuth } from 'module-auth/routes'
import { router as routesDashboard } from 'module-dashboard/routes'
import { router as routesOrders } from 'module-orders/routes'
import { router as routesSellers } from 'module-sellers/routes'
import { router as routesSupport } from 'module-support/routes'
import { router as routesFaq } from 'module-faq/routes'
import { router as routesDevices } from 'module-devices/routes'
import { router as routesSettings } from 'module-settings/routes'
import { router as routesProducts } from 'module-products/routes'
import { router as routesUsers } from 'module-users/routes'
import { router as routesFinances } from 'module-finances/routes'
import { router as routesCampaigns } from 'module-campaigns/routes'
import { router as routesLogistics } from 'module-logistics/routes'
import { router as routesMail } from 'module-mail/routes'

const routes = () => (
    <Router history={hashHistory}>
        {routesAuth}
        {routesDashboard}
        {routesOrders}
        {routesSellers}
        {routesSupport}
        {routesFaq}
        {routesDevices}
        {routesSettings}
        {routesProducts}
        {routesFinances}
        {routesCampaigns}
        {routesUsers}
        {routesLogistics}
        {routesMail}
        <Redirect from="*" to="/" />
    </Router>
)

export default routes
