import './Filter.css'
import { Filter } from '../index'
import { UseTodolist } from '../../Hook/useTodolist'

export function FilterContainer () {
  const { filter, setFilter } = UseTodolist()
  return (
    <div className='filter-container'>
      <Filter id='all' name='show' filter={filter} click={setFilter} label='All' />
      <Filter id='completed' name='show' filter={filter} click={setFilter} label='Completed' />
      <Filter id='pending' name='show' filter={filter} click={setFilter} label='Pending' />
    </div>
  )
}
