import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default props => (
    <Container>
        <Row>
            <Col xs={1} md={3}></Col>
            <Col xs={10} md={6}>
                {JSON.stringify(props)}
            </Col>
            <Col xs={1} md={3}></Col>
        </Row>
    </Container>
)
