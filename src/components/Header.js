import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
    console.log(props);
    return (
        <div>
            Header
        </div> 
    )
}
Header.defaultProps = {
    title:"this is the title"
}

Header.propTypes = {
    title:PropTypes.string
}

export default Header
