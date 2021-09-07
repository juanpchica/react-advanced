import React from 'react'
import Task from '../components/Task'

import "./task.css"

const Tasks = ({tasks,onDelete}) => {
    return (
        <div className="task-container">
          {tasks.map((task)=>{
            return <Task key={task.id} task={task} onDelete={onDelete}/>
          })}
        </div>
    )
}

export default Tasks
  