import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleMenu } from '../../actions'
import View from './view'

/*
 * Default Template Container
 */
class Index extends Component {

    constructor(props) { super(props) }

    render() {
        return (
            <View {...this.props} {...this.props.template} toggleMenu={this.props.toggleMenu}>
                {this.props.children}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    template: state.template
})

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleMenu
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Index)
