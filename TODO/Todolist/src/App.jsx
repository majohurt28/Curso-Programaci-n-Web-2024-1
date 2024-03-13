import { useState } from 'react'
import { Header, Body, Footer, TaskList, Form, ToDo, Filter } from './components/index'

/**Trabajo presentado por María José Hurtado y Nicolás Rodriguez**/
export default function App() {
    const [tasks, setTasks] = useState([
        {
        id: crypto.randomUUID(),
        tittle: '...',
        completed: 'false',

        },

    ])
    return (
        <div className='app-container'>
            <Header/>
            <Form></Form>
            <Filter></Filter>
            <TaskList tasks={tasks}>
            </TaskList>
        </div>
    )
}