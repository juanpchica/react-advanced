import React from 'react'
import Task from '../components/Task'

import "./task.css"

const Tasks = ({tasks,onDelete,toogleReminder}) => {
    return (
        <div className="task-container">
          {tasks.map((task)=>{
            return <Task key={task.id} task={task} onDelete={onDelete} toogleReminder={toogleReminder}/>
          })}
        </div>
    )
}

export default Tasks
  