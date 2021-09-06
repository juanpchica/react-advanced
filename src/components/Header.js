import React from 'react'
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header style={headingStyle}>
            <h1>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title:"this is the title"
}

Header.propTypes = {
    title:PropTypes.string.isRequired
}

const headingStyle = {
    color: "red"
}

export default Header
