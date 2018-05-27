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
        <Route path={sitemap.users_register.route} component={Auth(Register, sitemap.users_register)} />
        <Route path={sitemap.users_edit.route} component={Auth(Edit, sitemap.users_edit)} />
        <Route path={sitemap.users_view.route} component={Auth(View, sitemap.users_view)} />
        <Route path={sitemap.users_index.route} component={Auth(Index, sitemap.users_index)} />
    </Route>
)
