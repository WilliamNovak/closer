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
        <Route path={sitemap.finances_register.route} component={Auth(Register, sitemap.finances_register)} />
        <Route path={sitemap.finances_edit.route} component={Auth(Edit, sitemap.finances_edit)} />
        <Route path={sitemap.finances_view.route} component={Auth(View, sitemap.finances_view)} />
        <Route path={sitemap.finances_index.route} component={Auth(Index, sitemap.finances_index)} />
    </Route>
)
