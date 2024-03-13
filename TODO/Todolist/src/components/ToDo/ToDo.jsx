import './ToDo.css'

export function ToDo(){
    return(
        <div className='todo-cont'>
            <div className='task-items'>
                <span className='span-todo'></span>
                <p>Item</p>
            </div>
            <img className='close-icon' src="../../../public/trasch-icon.svg" alt='Close icon'></img>
        </div>
    )
}