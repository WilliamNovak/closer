import React, { Component } from 'react'
import './styles.css'
import Icon from 'html-icon'

export default class ChatWindow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showButton: true,
            showChat: false
        }
        this.onToggle = this.onToggle.bind(this)
    }

    onToggle = () => {
        this.setState({
            showButton: !this.state.showButton,
            showChat: !this.state.showChat
        })
    }

    render() {

        const { showButton, showChat } = this.state

        return (
            <div>
                <div onClick={this.onToggle} className={"chat-icon-button " + ( showButton ? 'is-visible' : 'is-hidden' )}>
                    <Icon name="comment"/>
                </div>

                <div className={"chat-window " + ( showChat ? 'is-visible' : 'is-hidden' )} id="chat-window-component">

                	<div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-title"><Icon name="comment"/> Chat</div>
                        </div>
                        <div className="panel-body chat-container-base">

                            <div className="row chat-message message-sent">
                                <div className="col-md-10 col-xs-10">
                                    <div className="messages message-sent-content">
                                        <p>Oi Fabiana, Tudo?</p>
                                        <time dateTime="2009-11-13T20:00">Hoje • 51 min</time>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-2 avatar">
                                    <img src="https://lh3.googleusercontent.com/-YBArsRib3ZA/AAAAAAAAAAI/AAAAAAAAAAA/AIcfdXBiYcXkt-qlIohNfbwGYePkKAOmvw/s64-c-mo/photo.jpg" className=" img-responsive "/>
                                </div>
                            </div>

                            <div className="row chat-message message-receive">
                                <div className="col-md-2 col-xs-2 avatar">
                                    <img src="https://lh5.googleusercontent.com/-yFnC9dUlAIE/AAAAAAAAAAI/AAAAAAAAABk/nRWoMsE0CWc/s64-c-k-no/photo.jpg" className=" img-responsive "/>
                                </div>
                                <div className="col-md-10 col-xs-10">
                                    <div className="messages message-receive-content">
                                        <p>Oi William, tudo e vc, tudo?</p>
                                        <time dateTime="2009-11-13T20:00">Hoje • 51 min</time>
                                    </div>
                                </div>
                            </div>

                            <div className="row chat-message message-sent">
                                <div className="col-xs-10 col-md-10">
                                    <div className="messages message-sent-content">
                                        <p>Tudo!!!<br />E aí, já assistiu o último epsódio de Westworld gúria?</p>
                                        <time dateTime="2009-11-13T20:00">Hoje • 39 min</time>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-2 avatar">
                                    <img src="https://lh3.googleusercontent.com/-YBArsRib3ZA/AAAAAAAAAAI/AAAAAAAAAAA/AIcfdXBiYcXkt-qlIohNfbwGYePkKAOmvw/s64-c-mo/photo.jpg" className=" img-responsive "/>
                                </div>
                            </div>

                            <div className="row chat-message message-receive">
                                <div className="col-md-2 col-xs-2 avatar">
                                    <img src="https://lh5.googleusercontent.com/-yFnC9dUlAIE/AAAAAAAAAAI/AAAAAAAAABk/nRWoMsE0CWc/s64-c-k-no/photo.jpg" className=" img-responsive "/>
                                </div>
                                <div className="col-xs-10 col-md-10">
                                    <div className="messages message-receive-content">
                                        <p>Ainda não assisti não gato! Vou ver hoje ainda :D</p>
                                        <time dateTime="2009-11-13T20:00">Hoje • 38 min</time>
                                    </div>
                                </div>
                            </div>

                            <div className="row chat-message message-sent">
                                <div className="col-xs-10 col-md-10">
                                    <div className="messages message-sent-content">
                                        <p>OMG! A Dolores tá muito foda na séria, ela e dona do Bordel! :O </p>
                                        <time dateTime="2009-11-13T20:00">Hoje • 37 min</time>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-2 avatar">
                                    <img src="https://lh3.googleusercontent.com/-YBArsRib3ZA/AAAAAAAAAAI/AAAAAAAAAAA/AIcfdXBiYcXkt-qlIohNfbwGYePkKAOmvw/s64-c-mo/photo.jpg" className=" img-responsive "/>
                                </div>
                            </div>

                            <div className="row chat-message message-receive">
                                <div className="col-md-2 col-xs-2 avatar">
                                    <img src="https://lh5.googleusercontent.com/-yFnC9dUlAIE/AAAAAAAAAAI/AAAAAAAAABk/nRWoMsE0CWc/s64-c-k-no/photo.jpg" className=" img-responsive "/>
                                </div>
                                <div className="col-md-10 col-xs-10 ">
                                    <div className="messages message-receive-content">
                                        <p>Vou assistir hoje mesmo, to ansiosa! =)</p>
                                    <time dateTime="2009-11-13T20:00">Hoje • 35 min</time>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="panel-footer">
                            <div className="input-group">
                                <input id="btn-input" type="text" className="form-control input-sm chat_input" placeholder="Digite aqui..." />
                                <span className="input-group-btn">
                                <button className="btn btn-primary btn-sm" id="btn-chat">
                                    <Icon name="send"/>
                                </button>
                                </span>
                            </div>
                        </div>
            	</div>
            </div>
        </div>
        )
    }
}
