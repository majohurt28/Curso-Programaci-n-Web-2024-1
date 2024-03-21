import { useState, useEffect } from "react"
import { TodoContext } from "./TodoContext"

let initTask = []
const lclStrg = JSON.parse(window.localStorage.getItem('tasks'))
if (lclStrg !== null) {
    initTask = lclStrg
} else {
    alert('there is no local storage')
}

export  function TodoContextProvider({children}) {

    const [tasks, setTasks] = useState(initTask)

    const [text, setText] = useState('')

    const [filter, setFilter] = useState('all')

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const filteredTodos = tasks.filter((todo) => {
        if (filter === 'all') return true
        if (filter === 'completed') return todo.completed
        if (filter === 'pending') return !todo.completed
        return true
    })

    const createTask = (title) => {
        if (text === '') {
            return alert('Please, give a name to your task before trying to add it')
          }
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

    return (<TodoContext.Provider  value={{tasks, setTasks, text, setText, filter, setFilter, filteredTodos, createTask, deleteTask, taskComplete , deleteCompletedTasks}}>
        {children} </TodoContext.Provider>)

}