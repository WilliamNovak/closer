import React from 'react'
import SignIn from './components/signIn/'
import LogOut from './components/logOut/'
import Register from './components/register/'
import Contract from './components/contract/'
import Unauthorized from './components/unauthorized/'
import { Route } from 'react-router'
import sitemap from 'sitemap'

export const router = (
    <Route>
        <Route path={sitemap.auth_sign_in.route} component={SignIn} />
        <Route path={sitemap.auth_sign_out.route} component={LogOut} />
        <Route path={sitemap.auth_register.route} component={Register} />
        <Route path={sitemap.auth_contract.route} component={Contract} />
        <Route path={sitemap.auth_unauthorized.route} component={Unauthorized} />
    </Route>
)
