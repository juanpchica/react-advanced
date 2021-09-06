import React from 'react'
import { Link } from 'react-router-dom'

import "./Nav.css"

const Nav = () => {
    return (
        <div>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/task" >Task</Link></li>
            </ul>
        </div>
    )
}

export default Nav
