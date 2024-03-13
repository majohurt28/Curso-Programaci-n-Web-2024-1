import { Header, Body, Footer, TaskList, Form, ToDo, Filter } from './components/index'

/**Trabajo presentado por María José Hurtado y Nicolás Rodriguez**/
export default function App() {
    return (
        <div className='app-container'>
            <Header/>
            <Form></Form>
            <Filter></Filter>
            <TaskList>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
            </TaskList>
        </div>
    )
}