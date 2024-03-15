import { useState } from 'react'
import { Header, Body, Footer, TaskList, Form, ToDo, Filter, FilterContainer } from './components/index'

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

    const [filter, setFilter] = useState('all')

    const filteredTodos = tasks.filter((todo) => {
        if (filter === 'all') return true
        if (filter === 'completed') return todo.completed
        if (filter === 'pending') return !todo.completed
        return true
    })

    const createTask = (title) => {
        /* const lastId = tasks.length > 0 ? tasks(tasks.length -1).id : 1; */
        const newTask = {
            id: crypto.randomUUID(),
            title,
            completed: false
        }

    const tasksList = [...tasks]
    tasksList.push(newTask);
    setTasks(tasksList);
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const taskComplete = (id,checked) =>{
        setTasks(tasks.map(tasks => {
            if (tasks.id === id){
                return {... tasks, completed: checked}
            }else{
                return tasks
            }
        }))

    }



    return (
        <div className='app-container'>
            <Header />
            <Form createTask={createTask}/>
            <FilterContainer filter={filter} setFilter={setFilter}/>

            {
                tasks.length > 0 ?
                <TaskList tasks={filteredTodos} taskComplete={taskComplete} deleteTask={deleteTask}/>
                :
                <h2>Add tasks</h2>
      }
        </div>
    );
}