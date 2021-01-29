import React, { useState } from 'react'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import { Task } from './Types'
import './App.css'

const initialState: Task[] = [
        {
            id: 2,
            title: '夕ごはん',
            done: false
        },{
            id: 1,
            title: '朝ごはん',
            done: true
        }
    ]
 
const App: React.FC = () => {
    const [tasks, setTasks] = useState(initialState)
 
    return (
        <div>
            <TaskInput setTasks={setTasks} tasks={tasks} />
            <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
    )
}

export default App
