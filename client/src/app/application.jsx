import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoadingBar from 'html-loading-bar'
import ToastMessage from 'html-toastr-messages'
import Chat from 'module-support/components/chat-component'
import Template from 'module-template/components/default/'

class Application extends Component {

    constructor(props) { super(props) }


    render() {

        const { current } = this.props.navigation

        return (
            <div>
                <LoadingBar />
                <ToastMessage />
                <Chat />
                <Template page={current}>
                    {this.props.children}
                </Template>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    navigation: state.navigation
})

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Application)
