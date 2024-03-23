import './ToDo.css'

export const ToDo = ({ tasks, taskComplete, deleteTask }) => {
    const { title, completed } = tasks

    function handleChange({ target }) {
        taskComplete(tasks.id, target.checked)
    }

    return (
        <div className='todo-cont'>
            <div className='task-items'>
                <input type='checkbox'
                    className='check-todo'
                    checked={tasks.completed}
                    onChange={handleChange}>
                </input>
                {tasks.completed ? <p className='task-title' style={{ textDecorationLine: 'line-through', color: '#91C836' }}>{tasks.title}</p> : <p>{tasks.title}</p>}
            </div>
            <button onClick={() => deleteTask(tasks.id)}>
                X
            </button>
        </div>
    )
}