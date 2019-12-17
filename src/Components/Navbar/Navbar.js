import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarStyle = styled.nav`
    display: flex;
    align-items: center;
    background-color: black;
    width:100%;
    height: 10vh;
`
const LinkList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style-type: none;
    color: white;
    width: 30%;
    margin: 0;
`
const ListElement = styled.li`
    text-transform: capitalize;
    font-size: 20px;
`

export default function Navbar() {
    return (
        <React.Fragment>
            <NavbarStyle>
                <LinkList>
                    <ListElement><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Product Description</Link></ListElement>
                    <ListElement><Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>Cart</Link></ListElement>
                </LinkList>
            </NavbarStyle>
        </React.Fragment>
    )
}
