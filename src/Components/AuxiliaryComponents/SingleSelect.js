import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SelectContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 35%;
    text-transform: uppercase;
    cursor: pointer;
    height: 50px;
    padding: 0 20px;
    border: 1px solid #767677;
`
const Select = styled.select`
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    box-sizing: border-box;
    border:none;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 700;
    width: 100%;
`

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
            <SelectContainer>
            <Select onChange={(event) => this.addSelected(event.target.value)}>
                {options.map((option, i) => <option key={i} value={option.value}>{option.label}</option> )}
            </Select>
            <FontAwesomeIcon icon={faChevronDown} />
            </SelectContainer>
        )
    }
}
//<FontAwesomeIcon icon={faChevronDown} />