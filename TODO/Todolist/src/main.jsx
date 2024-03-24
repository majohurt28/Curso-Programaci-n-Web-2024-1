import React from 'react'
import ReactDOM from 'react-dom/client'
import {TodoContextProvider} from './context/TodoContextProvider'
import './style.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('app')).render(
    //**Duplica las acciones internamente */
    <React.StrictMode>

        <TodoContextProvider>
            <App/>
        </TodoContextProvider>
    </React.StrictMode>
)