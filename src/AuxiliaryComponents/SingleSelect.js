import React, { Component } from 'react'

export default class SingleSelect extends Component {
    state = {}

    addSelected = (value) => {
        this.props.addSelected(this.props.property, value)
        this.setState({
            [this.props.property]: value
        })
    }
    render() {
        let { options } = this.props
        return (
            <select onChange={(event) => this.addSelected(event.target.value)}>
                {options.map(option => <option value={option.value}>{option.label}</option>)}
            </select>
        )
    }
}
