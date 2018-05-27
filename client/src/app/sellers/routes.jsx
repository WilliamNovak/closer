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
        <Route path={sitemap.sellers_register.route} component={Auth(Register, sitemap.sellers_register)} />
        <Route path={sitemap.sellers_edit.route} component={Auth(Edit, sitemap.sellers_edit)} />
        <Route path={sitemap.sellers_view.route} component={Auth(View, sitemap.sellers_view)} />
        <Route path={sitemap.sellers_index.route} component={Auth(Index, sitemap.sellers_index)} />
    </Route>
)
