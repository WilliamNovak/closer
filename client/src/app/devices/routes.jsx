import React from 'react'
import { Route } from 'react-router'
import { Auth } from 'module-auth/authorization'

import Register from './components/register/'
import Edit from './components/edit/'
import View from './components/view/'
import Index from './components/index/'
import sitemap from 'sitemap'

export const router = (
    <Route>
        <Route path={sitemap.devices_register.route} component={Auth(Register, sitemap.devices_register)} />
        <Route path={sitemap.devices_edit.route} component={Auth(Edit, sitemap.devices_edit)} />
        <Route path={sitemap.devices_view.route} component={Auth(View, sitemap.devices_view)} />
        <Route path={sitemap.devices_index.route} component={Auth(Index, sitemap.devices_index)} />
    </Route>
)
