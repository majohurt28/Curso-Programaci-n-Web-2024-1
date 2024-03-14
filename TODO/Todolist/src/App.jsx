import { useState } from 'react'
import { Header, Body, Footer, TaskList, Form, ToDo, Filter } from './components/index'

/**Trabajo presentado por María José Hurtado y Nicolás Rodriguez**/
export default function App() {
    const [tasks, setTasks] = useState([
        {
        id: crypto.randomUUID(),
        title: 'hola',
        completed: false

        },{
            id: crypto.randomUUID(),
            title: 'hola',
            completed: false

        }
    ])


    return (
        <div className='app-container'>
            <Header/>
            <Form/>
            <Filter/>
            <TaskList tasks={tasks}/>
        </div>
    );
}