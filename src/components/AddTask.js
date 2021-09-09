import React, { useState } from 'react'

const AddTask = () => {
    const [nameTask,setNameTask] = useState("");

    return (
        <div>
            <form>
                <input type="text" placeholder="Name a new task.." onChange={(e)=>setNameTask(e.target.value)}/>
            </form>
        </div>
    )
}

export default AddTask
