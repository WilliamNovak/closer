import React from 'react'
import { Container, Row, Column } from 'html-grid'
import { Card } from 'html-component'
import Icon from 'html-icon'
import { Link } from 'react-router'

export default props => (
    <Container>
        <Row>
            <Column mobile={12} tablet={4} desktop={4} />
            <Column mobile={12} tablet={4} desktop={4}>
                <div className="text-center">
                    <Card>
                        <h1><Icon name="frown-o" /></h1>
                        <p>
                            Você não pode acessar essa página!<br />
                            <small><Link to="/">Clique aqui</Link> para voltar ao índice.</small>
                        </p>
                    </Card>
                </div>
            </Column>
            <Column mobile={12} tablet={4} desktop={4} />
        </Row>
    </Container>
)
