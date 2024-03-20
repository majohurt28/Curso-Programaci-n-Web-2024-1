import './Footer.css'

export function Footer(props) {
    const {tasks, deleteCompletedTasks}=props

    const taskNum = tasks.length !== 1 ? "tasks" : "task";
    const taskCount=tasks.length

    return (
        <footer className='footer' >
            <p id="list-heading"> {taskCount} {taskNum} remaining</p>
            <button onClick={deleteCompletedTasks}>Delete Completed</button>
        </footer>
    )
}