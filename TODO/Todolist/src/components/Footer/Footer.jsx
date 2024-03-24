import './Footer.css'
import { UseTodolist } from '../../Hook/useTodolist'

export function Footer () {
  const { tasks, deleteCompletedTasks } = UseTodolist()

  const taskNum = tasks.length !== 1 ? 'tasks' : 'task'
  const taskCount = tasks.length
  let compTasks = 0
  tasks.forEach((e) => {
    if (e.completed === true) {
      compTasks++
      //* *Se suma a estado inicial de compTask */
    }
  })

  return (
    <footer className='footer'>
      <p id='list-heading'> {compTasks} out of {taskCount} {taskNum} remaining</p>
      <button onClick={deleteCompletedTasks}>Delete Completed</button>
    </footer>
  )
}
