import './TaskList.css'
import { Filter } from '../Filter/Filter'
export function TaskList({children}){
    return(
        <div className='task-cont'>
            {children}
            <Filter></Filter>
        </div>

    )
}