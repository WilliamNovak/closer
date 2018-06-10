import React from 'react'

export default class InputFileComponent extends Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        const { input: { onChange } } = this.props
        onChange(e.target.files[0])
    }

    render(){

        const { input: { value } } = this.props
        const { input, name, accept, label, required, meta } = this.props

        return(
            <div>
                <label>{label}</label>
                <div>
                    <input
                        type='file'
                        name={name}
                        accept={ accept ? accept : '.jpg,.png,.jpeg' }
                        onChange={this.onChange}
                        />
                </div>
            </div>
        )
    }
}
