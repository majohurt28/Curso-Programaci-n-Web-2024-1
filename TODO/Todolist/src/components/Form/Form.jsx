import { useState } from "react"

export const  Form = ({createTask}) => {

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
       if (e.key.toLowerCase() === 'enter') {
            createTask(title)
            setTitle('')
        }
    }

    return (
        <div className='form-cont' >
            <input id="form-input" type="text" placeholder="Enter task..."  value={title}
                    onChange={e =>setTitle(e.target.value)}
                    onKeyDown={e => handleChange(e)}/>
            <button className="add-btn" >Add Task</button>

        </div>
    )
}