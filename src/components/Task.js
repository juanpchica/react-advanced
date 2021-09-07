import React from 'react'
import {FaTimes} from 'react-icons/fa';
const Task = ({task:{text,day,reminder,id}}) => {
    return (
        <div className="task">
            <h3>{text} <FaTimes style={{color:'red',cursor:'pointer'}}/></h3>
            <p>{day}</p>
        </div>
    )
}

export default Task
