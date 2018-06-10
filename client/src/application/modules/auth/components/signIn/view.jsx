import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Form from 'application/modules/auth/forms/signIn'

export default props => {
    const { signUpRoute } = props
    return (
        <Container>
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6}>
                    <h1 className="text-center login-title">
                        É necessário se identificar para entrar
                    </h1>
                    <Form {...props} />
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>
        </Container>
    )
}
