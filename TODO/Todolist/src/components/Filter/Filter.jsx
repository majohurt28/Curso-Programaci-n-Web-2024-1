import './Filter.css'
//import { FilterContainer, CountTask, ButtonContainer, ButtonFilter } from './FilterContainer'

export function Filter(props) {
    const { id, name, filter, click, label } = props
    return (
        <div className='filter-cont' >
            <input type='radio' id={id} name={name} checked={filter === id} onChange={() => click(id)} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}