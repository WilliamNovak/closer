import React, { Component } from 'react'

export default class InputCheckbouGroupComponent extends Component {

    checkboxGroup = () => {
        let { label, required, options, input, meta } = this.props
        return options.map(
            (option, index) => (
                <div className="checkbox" key={index}>
                    <label>
                        <input type="checkbox"
                               name={`${input.name}[${index}]`}
                               value={option.name}
                               checked={input.value.indexOf(option.name) !== -1}
                               onChange={
                                   (event) => {
                                        const newValue = [...input.value]
                                        if (event.target.checked) {
                                            newValue.push(option.name)
                                        } else {
                                            newValue.splice(newValue.indexOf(option.name), 1)
                                        }
                                        return input.onChange(newValue)
                                   }
                               }/>
                        {option.name}
                    </label>
                </div>
            )
        )
    }

    render () => <div>{this.checkboxGroup()}</div>

}
