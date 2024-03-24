import { UseTodolist } from '../../Hook/useTodolist'
import './Filter.css'
// import { FilterContainer, CountTask, ButtonContainer, ButtonFilter } from './FilterContainer'

export function Filter (props) {
  const { id, name, label } = props
  const { filter, setFilter } = UseTodolist()
  return (
    <div className='filter-cont'>
      <input type='radio' id={id} name={name} checked={filter === id} onChange={() => setFilter(id)} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
