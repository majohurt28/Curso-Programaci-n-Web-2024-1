import { useEffect, useState } from 'react'
import { Header, Footer, TaskList, Form, ToDo, FilterContainer } from './components/index'
import {UseTodolist} from './Hook/useTodolist';


/**Trabajo presentado por María José Hurtado y Nicolás Rodriguez**/
export default function App() {
    // const {tasks, setTasks, text, setText, filter, setFilter, filteredTodos, createTask, deleteTask, taskComplete , deleteCompletedTasks} = UseTodolist()

    const {tasks} = UseTodolist()

    return (
        <div className='app-container'>
            <Header />
            <Form />
            <FilterContainer />

            {tasks.length > 0 ?
                <TaskList
                    tasks={filteredTodos}
                    taskComplete={taskComplete}
                    deleteTask={deleteTask} />
                : <h2>Add tasks</h2>
            }
            <Footer />
            {/* <Footer
                tasks={tasks}
                deleteCompletedTasks={deleteCompletedTasks}
                countText={countText}
                /> */}
        </div>
    );
}