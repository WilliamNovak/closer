import React from 'react'
import { Container, Row, Column } from 'html-grid'
import { Card } from 'html-component'
import Icon from 'html-icon'
import { Link } from 'react-router'
import "./styles.css"
import Logo from '../../../../../assets/images/logo.png'

export default props => (
    <Container>

        <br />
        <br />

        <Row>
            <Column>
                <div className="text-center">
                    <img src={Logo} width="140px" alt="" />
                </div>
            </Column>
        </Row>

        <br />

        <Row>
            <Column>
                <h1>
                    Contrato de licença de uso
                </h1>
                <p>
                    Por favor, leia as seguintes informações importantes antes de começar a usar.
                </p>
            </Column>
        </Row>

        <br />

        <Row>
            <Column>
                <Card>
                    <div className="contract-content">
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis!
                        </p>
                        <p>
                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. In elementis mé pra quem é amistosis quis leo. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.
                        </p>
                        <p>
                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Pra lá , depois divoltis porris, paradis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
                        </p>
                        <p>
                            Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Sapien in monti palavris qui num significa nadis i pareci latim. Aenean aliquam molestie leo, vitae iaculis nisl. Per aumento de cachacis, eu reclamis.
                        </p>
                        <p>
                            Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Casamentiss faiz malandris se pirulitá.
                        </p>
                        <p>
                            Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Diuretics paradis num copo é motivis de denguis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                        </p>
                        <p>
                            Interagi no mé, cursus quis, vehicula ac nisi. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
                        </p>
                        <p>
                            Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça. A ordem dos tratores não altera o pão duris. Viva Forevis aptent taciti sociosqu ad litora torquent.
                        </p>
                    </div>
                </Card>
            </Column>
        </Row>

        <br />

        <Row>
            <Column>
                {props.children}
            </Column>
        </Row>
    </Container>
)
