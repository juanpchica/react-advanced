import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {

    const onClick  = (e) => {
        alert("this is a button");
    }

    return (
        <header style={headingStyle} className="header">
            <h1>{title}</h1>
            <Button color="green" onClick={onClick}>Add Task</Button>
            <Button  onClick={onClick}>Add Task 02</Button>
        </header>
    )
}
Header.defaultProps = {
    title:"Task Tracker"
}

Header.propTypes = {
    title:PropTypes.string.isRequired
}

const headingStyle = {
    color: "gray"
}

export default Header
