import './ToDo.css'

export const ToDo = ({ tasks, taskComplete,deleteTask }) => {
    const { title, completed } = tasks

    function handleChange({target}){
        taskComplete(tasks.id, target.checked)
    }

    return (
        <div className='todo-cont'>
            <div className='task-items'>
            <input type='checkbox' className='check-todo' checked={tasks.completed} onChange={handleChange}></input>

                <p className={'title-todo' + (completed && "line-through")}>{title} </p>
            </div>
            <button onClick={() => deleteTask(tasks.id)}>
                X
            </button>
        </div>
    )
}