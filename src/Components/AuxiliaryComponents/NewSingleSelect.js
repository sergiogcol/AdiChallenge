import React, { useState } from 'react';
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
 function SingleSelect (props){
    const [selectedItem, addSelectedItem] = useState({})

    const addSelected = (value) => {
        if (props.sendSize) {
            let selectedSize = props.options.filter(item => item.value === value)[0].label;
            props.addSelected(selectedSize)
            props.addSelectedSKU(value)
        } else {
            props.addSelected(value)
        }
        addSelectedItem({
            ...selectedItem,
            [props.property]: value
        })
    }
   
        let { options, selectedOption } = props;

        return (
            <SelectContainer>
                <Select value={selectedOption} onChange={(event) => {addSelected(event.target.value) }}>
                    {options.map((option, i) => <option key={i} value={option.value} label={option.label} >{option.label}</option>)}
                </Select>
                <FontAwesomeIcon icon={faChevronDown} />
            </SelectContainer>
        )
    
}


export default SingleSelect