import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router'

export default (props) => (
    <Container>
        <Row>
            <Col xs={1} md={3}></Col>
            <Col xs={10} md={6}>
                <h1 className="text-center">Tchau Tchau</h1>
                <Link to="/">Clique aqui</Link> para voltar para a autenticação.
            </Col>
            <Col xs={1} md={3}></Col>
        </Row>
    </Container>
)
