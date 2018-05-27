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
        <Route path={sitemap.faq_register.route} component={Auth(Register, sitemap.faq_register)} />
        <Route path={sitemap.faq_edit.route} component={Auth(Edit, sitemap.faq_edit)} />
        <Route path={sitemap.faq_view.route} component={Auth(View, sitemap.faq_view)} />
        <Route path={sitemap.faq_index.route} component={Auth(Index, sitemap.faq_index)} />
    </Route>
)
