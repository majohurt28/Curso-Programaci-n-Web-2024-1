import { useEffect, useState } from 'react'
import { Header, Footer, TaskList, Form, ToDo, FilterContainer } from './components/index'

let initTask = []
const lclStrg = JSON.parse(window.localStorage.getItem('tasks'))
if (lclStrg !== null) {
    initTask = lclStrg
}else{
    alert('there is no local storage')
}

/**Trabajo presentado por María José Hurtado y Nicolás Rodriguez**/
export default function App() {
    const [tasks, setTasks] = useState(initTask)

    const [text, setText] = useState('')

    const [filter, setFilter] = useState('all')

    useEffect(() =>{
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

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
        setText('')
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const taskComplete = (id, checked) => {
        setTasks(tasks.map(tasks => {
            if (tasks.id === id) {
                return { ...tasks, completed: checked }
            } else {
                return tasks
            }
        }
        ))
    }

    const deleteCompletedTasks = () => {
        setTasks(tasks.filter(task => task.completed !== true))
    };



    return (
        <div className='app-container'>
            <Header />
            <Form createTask={createTask} text={text} setText={setText}/>
            <FilterContainer filter={filter} setFilter={setFilter} />

            {tasks.length > 0 ?
                <TaskList
                    tasks={filteredTodos}
                    taskComplete={taskComplete}
                    deleteTask={deleteTask} />
                : <h2>Add tasks</h2>
            }
            <Footer tasks={tasks} deleteCompletedTasks={deleteCompletedTasks} />
            {/* <Footer
                tasks={tasks}
                deleteCompletedTasks={deleteCompletedTasks}
                countText={countText}
                /> */}
        </div>
    );
}