import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default props => (
    <Container>
        <Row>
            <Col xs={1} md={3}></Col>
            <Col xs={10} md={6}>
                <div className="text-center">
                    <p>
                        Você não pode acessar essa página!<br />
                        <small><Link to="/">Clique aqui</Link> para voltar ao índice.</small>
                    </p>
                </div>
            </Col>
            <Col xs={1} md={3}></Col>
        </Row>
    </Container>
)
