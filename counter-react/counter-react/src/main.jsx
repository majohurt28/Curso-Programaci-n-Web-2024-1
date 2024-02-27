import './style.css'
import React from "react"
import {createRoot} from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
 // devuelve un root a partir del componente que estamos creando
root.render(<App />)//estanciar una etiquta- renderice el componente app
console.log (rootElement);