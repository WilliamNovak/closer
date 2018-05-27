import React from 'react'
import { Route } from 'react-router'
import { Auth } from 'module-auth/authorization'

import View from './components/view/'
import Index from './components/index/'
import sitemap from 'sitemap'

export const router = (
    <Route>
        <Route path={sitemap.logistics_view.route} component={Auth(View, sitemap.logistics_view)} />
        <Route path={sitemap.logistics_index.route} component={Auth(Index, sitemap.logistics_index)} />
    </Route>
)
