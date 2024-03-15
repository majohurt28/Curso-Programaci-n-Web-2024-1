import './Filter.css'
import { Filter } from '../index'

export function FilterContainer(props){
    const {filter, setFilter} = props
    return(
        <div className='filter-container'>
                <Filter id='all' name='show' filter={filter} click={setFilter} label='All' />
                <Filter id='completed' name='show' filter={filter} click={setFilter} label='Completed' />
                <Filter id='pending' name='show' filter={filter} click={setFilter} label='Pending' />
        </div>
    )
}