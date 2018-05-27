import React from 'react'
import { Container, Row, Column } from 'html-grid'
import Logo from './sign-in.png'
import { Link } from 'react-router'
import sitemap from 'sitemap'

export default props => (
    <Container>
        <Row>
            <Column mobile={12} tablet={3} desktop={4}></Column>
            <Column mobile={12} tablet={6} desktop={4}>

                <img className="profile-img" src={Logo} alt="" />

                <h1 className="text-center login-title">
                    Está pronto para começar a vender muito mais <strong>Small Shops</strong>?
                </h1>

                {props.children}

                <Link className="btn btn-link btn-block" to={sitemap.auth_sign_in.route}>
                    Já tenho conta
                </Link>

            </Column>
            <Column mobile={12} tablet={3} desktop={4}></Column>
        </Row>
    </Container>
)
