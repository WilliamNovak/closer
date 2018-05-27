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
        <Route path={sitemap.mail_register.route} component={Auth(Register, sitemap.mail_register)} />
        <Route path={sitemap.mail_edit.route} component={Auth(Edit, sitemap.mail_edit)} />
        <Route path={sitemap.mail_view.route} component={Auth(View, sitemap.mail_view)} />
        <Route path={sitemap.mail_index.route} component={Auth(Index, sitemap.mail_index)} />
    </Route>
)
