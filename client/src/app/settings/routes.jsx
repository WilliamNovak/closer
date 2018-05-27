import React from 'react'
import { Route } from 'react-router'
import { Auth } from 'module-auth/authorization'

import Ui from './components/user-interface/'
import Index from './components/index/'
import sitemap from 'sitemap'

export const router = (
    <Route>
        <Route path={sitemap.settings_seller_ui.route} component={Auth(Ui, sitemap.settings_seller_ui)} />
        <Route path={sitemap.settings_index.route} component={Auth(Index, sitemap.settings_index)} />
    </Route>
)
