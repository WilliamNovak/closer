import React from 'react'
import { Route } from 'react-router'
import { Auth } from '../auth/authorization'

import HomeManager from './components/homeManager/'
import HomeAdmin from './components/homeAdmin/'

import sitemap from 'sitemap'

export const router = (
    <Route>
        <Route path={sitemap.dashboard_manager_index.route} component={Auth(HomeManager, sitemap.dashboard_manager_index)} />
        <Route path={sitemap.dashboard_admin_index.route} component={Auth(HomeAdmin, sitemap.dashboard_admin_index)} />
    </Route>
)
