import './Filter.css'

const FilterContainer = ({children}) => {
    return (
        <div className='filters-cont' >{children}
        </div>
    )
}

const CountTask =({total = 0}) => {
    return(
        <p>{total} Taks left</p>
    )
}

const ButtonContainer = ({children}) =>{
    return(
        <div className='btn-container'>
            {children}
        </div>
    )
}

const ButtonFilter = ({action, active , filter}) => {
    return(
        <button className={`text: white` + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400':'text-gray-400')}>
            {filter}
        </button>

    )
}

export {FilterContainer, CountTask, ButtonContainer, ButtonFilter};