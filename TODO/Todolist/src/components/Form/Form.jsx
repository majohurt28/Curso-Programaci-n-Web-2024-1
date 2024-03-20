import { useState } from "react"

export const Form = (props) => {
    const { createTask, text, setText }= props



    const handleChange = (e) => {
        e.preventDefault()
        createTask(text)
    }

    return (
        <form className='form-cont' onSubmit={handleChange}>
            <input id="form-input" type="text" placeholder="Enter task..." value={text}
                onChange={e => setText(e.target.value)} />
            <button className="add-btn" type='submit' >
                Add Task
            </button>
        </form>
    )
}