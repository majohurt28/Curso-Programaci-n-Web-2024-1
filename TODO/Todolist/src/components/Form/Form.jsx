import { UseTodolist } from '../../Hook/useTodolist'
import './Forms.css'

export const Form = () => {
  const { createTask, text, setText } = UseTodolist()

  const handleChange = (e) => {
    e.preventDefault()
    createTask(text)
  }

  return (
    <form onSubmit={handleChange}>
      <input
        id='form-input' type='text' placeholder=' Enter task...' value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className='add-btn' type='submit'>
        <img className='plus-icon' src='../../../../../public/plus-icon.svg' />
      </button>
    </form>
  )
}
