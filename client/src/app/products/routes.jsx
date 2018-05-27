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
        <Route path={sitemap.products_register.route} component={Auth(Register, sitemap.products_register)} />
        <Route path={sitemap.products_edit.route} component={Auth(Edit, sitemap.products_edit)} />
        <Route path={sitemap.products_view.route} component={Auth(View, sitemap.products_view)} />
        <Route path={sitemap.products_index.route} component={Auth(Index, sitemap.products_index)} />
    </Route>
)
