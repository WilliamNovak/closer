import React from 'react'
import SignIn from 'application/modules/auth/components/signIn'
import SignOut from 'application/modules/auth/components/signOut'
import Unauthorized from 'application/modules/auth/components/unauthorized'
import Welcome from 'application/modules/auth/components/welcome'
import authmaps from 'application/modules/auth/maps'
import { Route } from 'react-router'

export const router = (
    <Route>
        <Route path={authmaps.signIn.route} page={authmaps.signIn} component={SignIn} />
        <Route path={authmaps.signOut.route} page={authmaps.signOut} component={SignOut} />
        <Route path={authmaps.unauthorized.route} page={authmaps.unauthorized} component={Unauthorized} />
        <Route path={authmaps.welcome.route} page={authmaps.welcome} component={Welcome} />
    </Route>
)
