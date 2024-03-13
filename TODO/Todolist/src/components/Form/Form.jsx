
export function Form(inputValue, handleInputChange, text, handleAddTask) {
    return (
        <div className='form-cont' >

            <input id="form-input" type="text"  placeholder="Enter task..."></input>
            <button className="add-btn" onClick={handleAddTask}>Add Task</button>

        </div>
    )
}