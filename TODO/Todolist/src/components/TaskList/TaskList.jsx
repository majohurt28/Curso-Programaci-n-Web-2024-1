import './TaskList.css'
import { Filter } from '../Filter/Filter'
import { ToDo } from '../ToDo/ToDo'

export const TaskList = ({ tasks, taskComplete,deleteTask}) => {
    return (
        <div className='task-cont'>
            {tasks.map(tasks => {
                return (
                    <ToDo key={tasks.id} tasks={tasks} taskComplete={taskComplete} deleteTask={deleteTask}/>
                )
            })}
        </div>
    )
}

/**Return Todo items */


/**Return Todo items */