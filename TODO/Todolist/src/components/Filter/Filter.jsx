import './Filter.css'
import { FilterContainer, CountTask, ButtonContainer, ButtonFilter } from './FilterContainer'

export function Filter() {
    return (
        <div className='filter-cont' >
            <FilterContainer>
                <CountTask></CountTask>
                <ButtonContainer>
                    <ButtonFilter action={()=> {}} active="All" filter="All"/>
                    <ButtonFilter action={()=> {}} active="All" filter="Completed"/>
                    <ButtonFilter action={()=> {}} active="All" filter="Pending"/>
                </ButtonContainer>
            </FilterContainer>
        </div>
    )
}