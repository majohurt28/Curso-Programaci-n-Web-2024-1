import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export  function UseTodolist() {
    const context = useContext(TodoContext)

    if (!context){
        throw new Error('This component should be within TodoContextProvider in Context.jsx')
    } return {...context}
}

