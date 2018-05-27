import React from 'react'
import { Container, Row, Column } from 'html-grid'
import ReactLoading from 'react-loading'
import './styles.css'

export default props => <Container fluid>
    <Row>
        <Column mobile={12} tablet={2} desktop={4} />
        <Column mobile={12} tablet={8} desktop={4}>
            <div className="loading">
                <span>CARREGANDO</span>
                <ReactLoading type="bars" color="#888" width={80} />
            </div>
        </Column>
        <Column mobile={12} tablet={2} desktop={4} />
    </Row>

</Container>
