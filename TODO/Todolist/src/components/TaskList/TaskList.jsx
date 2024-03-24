import './TaskList.css'
import { UseTodolist } from '../../Hook/useTodolist'
import { ToDo } from '../ToDo/ToDo'

export const TaskList = () => {
  const { filteredTodos, taskComplete, deleteTask } = UseTodolist()

  return (
    <div className='task-cont'>
      {filteredTodos.map(tasks => {
        return (
          <ToDo
            key={tasks.id}
            tasks={tasks}
            taskComplete={taskComplete}
            deleteTask={deleteTask}
          />
        )
      })}
    </div>
  )
}

/** Return Todo items */
