import React, { useState } from 'react'
import Header from '../components/Header'
import Tasks from './Tasks'



const Htask = () => {
    const [tasks,setTasks] = useState([
        {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
        },
        {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
        }
    ]);
    
    //Delete task
    const deleteTask = (id) => {
        const newTasks = tasks.filter((task)=> task.id !== id);
        setTasks(newTasks);
    }

    const toogleReminder = (id) => {
        const newTask = tasks.find();
    }
    return (
        <div>
            <Header/>
            {tasks.length === 0 ? <div>No tasks to show</div>: <Tasks tasks={tasks} onDelete={deleteTask} toogleReminder={toogleReminder}/>}
        </div>
    )
}

export default Htask
