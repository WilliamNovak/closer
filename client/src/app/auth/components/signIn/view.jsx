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
                    É necessário se identificar para entrar na <strong>Rede Home</strong>
                </h1>

                {props.children}

                <Link className="btn btn-link btn-block" to={sitemap.auth_register.route}>
                    Criar conta
                </Link>

            </Column>
            <Column mobile={12} tablet={3} desktop={4}></Column>
        </Row>
    </Container>
)
