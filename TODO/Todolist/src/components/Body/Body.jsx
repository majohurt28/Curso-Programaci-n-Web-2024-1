
import { useState } from "react"
import './Body.css'

export function Body(props) {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleDeleteTask = taskId => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleToggleTask = taskId => {
        setTasks(
            tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter task..."
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleTask(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}