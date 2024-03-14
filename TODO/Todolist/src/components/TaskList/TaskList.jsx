import './TaskList.css'
import { Filter } from '../Filter/Filter'
import { ToDo } from '../ToDo/ToDo'

export const TaskList = ({ tasks, taskComplete}) => {
    return (
        <div className='task-cont'>
            {tasks.map(tasks => {
                return (
                    <ToDo key={tasks.id} tasks={tasks} taskComplete={taskComplete}/>
                )
            })}
        </div>
    )
}

/**Return Todo items */


/**Return Todo items */