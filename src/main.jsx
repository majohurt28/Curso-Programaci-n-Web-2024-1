import './style.css'
import React from "react"
import {createRoot} from 'react-dom/client'
import App from './app'

const appContainer = document.querySelector("#app")

 //id en html
const root = createRoot(appContainer)
 // devuelve un root a partir del componente que estamos creando

//componente con mayuscula
root.render(<App />)//estanciar una etiquta- renderice el componente app
console.log ("holaaa")
