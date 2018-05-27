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
        <Route path={sitemap.campaigns_register.route} component={Auth(Register, sitemap.campaigns_register)} />
        <Route path={sitemap.campaigns_edit.route} component={Auth(Edit, sitemap.campaigns_edit)} />
        <Route path={sitemap.campaigns_view.route} component={Auth(View, sitemap.campaigns_view)} />
        <Route path={sitemap.campaigns_index.route} component={Auth(Index, sitemap.campaigns_index)} />
    </Route>
)
