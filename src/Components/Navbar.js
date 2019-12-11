import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Product Description</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </nav>
    )
}
