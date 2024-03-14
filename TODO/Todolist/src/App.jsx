import { useState } from 'react'
import { Header, Body, Footer, TaskList, Form, ToDo, Filter } from './components/index'

/**Trabajo presentado por María José Hurtado y Nicolás Rodriguez**/
export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: crypto.randomUUID(),
            title: 'hola',
            completed: false

        }, {
            id: crypto.randomUUID(),
            title: 'hola',
            completed: false

        }
    ])

    const createTask = (title) => {
        const lastId = tasks.length > 0 ? tasks(tasks.length -1).id : 1;
        const newTask = {
            id: lastId + 1,
            title,
            completed: false
        }

    const tasksList = [...tasks]
    tasksList.push(newTask);
    setTasks(tasksList);

    }


    return (
        <div className='app-container'>
            <Header />
            <Form createTask={createTask}/>
            <Filter />
            <TaskList tasks={tasks} />
        </div>
    );
}