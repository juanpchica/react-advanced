import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,onClick,children}) => {
    console.log(children);
    return (
        <button style={{backgroundColor: color}} onClick={onClick} className="btn">{children}</button>
    )
}

Button.defaultProps = {
    color:"gray"
}

Button.propTypes = {
    color:PropTypes.string,
    onClick: PropTypes.func.isRequired
}


export default Button
