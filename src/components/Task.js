import React from 'react'

const Task = ({task:{text,day,reminder,id}}) => {
    console.log(text);
    return (
        <div className="task">
            <h3>{text}</h3>
            <p>{day}</p>
        </div>
    )
}

export default Task
