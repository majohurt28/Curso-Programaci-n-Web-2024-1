import './ToDo.css'

export const ToDo = ({ tasks }) => {
    const { title, completed } = tasks
    return (
        <div className='todo-cont'>
            <div className='task-items'>
                {
                completed ? (
                    //**If the task is completed, change the span for a check icon */
                    <div className='check-container'>
                        <img className='check-icon' src="../../../public/check-icon.svg" alt='Check icon'></img>
                    </div>
                ) : (
                    <span className='span-todo'></span>
                    )
                }
                <p className={'title-todo' + (completed && "line-through")}>{title} </p>
            </div>
            <img className='close-icon' src="../../../public/trasch-icon.svg" alt='Close icon'></img>
        </div>
    )
}