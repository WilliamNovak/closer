import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const classSet = (c) => (
    typeof c !== 'object' ?
    Array.prototype.join.call(arguments, ' ') :
    Object.keys(c).filter(className => c[className]).join(' ')
)

export default class ProgressElement extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        var percent = parseInt(this.props.percent)
        var deg = (360 * (percent/100))
        var element = ReactDOM.findDOMNode(this.refs.progressPie)
        element.style.transform = 'rotate(-'+ deg +'deg)'
    }

    render() {

        var percent = Math.floor(this.props.percent)
        var description = this.props.description

        var classes = classSet({
            "progress-pie-chart": true,
            "gt-50": (percent > 50)
        })

        return (
            <div className="progress-pie clearfix">
                <div className={classes}>
                    <div className="ppc-progress">
                        <div className="ppc-progress-fill" ref="progressPie"></div>
                    </div>
                    <div className="ppc-percents">
                        <div className="pcc-percents-wrapper">
                            <span className="percent">{percent + '%'}</span>
                            <span className="description">{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
