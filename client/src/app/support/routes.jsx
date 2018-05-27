import React from 'react'
import { Route } from 'react-router'
import { Auth } from 'module-auth/authorization'

import Register from './components/register/'
import Edit from './components/edit/'
import View from './components/view/'
import Index from './components/index/'
import UserGuide from './components/user-guide/'
import sitemap from 'sitemap'

export const router = (
    <Route>
        <Route path={sitemap.support_register.route} component={Auth(Register, sitemap.support_register)} />
        <Route path={sitemap.support_edit.route} component={Auth(Edit, sitemap.support_edit)} />
        <Route path={sitemap.support_view.route} component={Auth(View, sitemap.support_view)} />
        <Route path={sitemap.support_index.route} component={Auth(Index, sitemap.support_index)} />
        <Route path={sitemap.support_user_guide.route} component={Auth(UserGuide, sitemap.support_user_guide)} />
    </Route>
)
