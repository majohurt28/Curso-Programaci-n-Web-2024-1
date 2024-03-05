
export function Form(inputValue, handleInputChange, text, handleAddTask) {
    return (
        <div className='form-cont' >
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Write a task"></input>
            <button className="add-btn" onClick={handleAddTask}>Add Task</button>

        </div>
    )
}