import React from 'react'
import IconWhite from 'assets-images/logo-white.png'
import IconColor from 'assets-images/logo-blue.png'

const Logo = props => <img src={props.logo} alt="" />

export const LogoWhite = props => <Logo logo={IconWhite} />
export const LogoColor = props => <Logo logo={IconColor} />
