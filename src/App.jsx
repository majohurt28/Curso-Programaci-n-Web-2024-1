import React from "react"
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Footer } from "./components/Footer/Footer"

export default function App() {
    return (
        //cuando hay más de una etqueta es mejor colocarlas en un contenedor
        // fragment es una etiqueta vacia <> </>
        <div>
            <h1>Buenas world!!!</h1>
            <Body />
            <Header Color='blue' />
            <Footer />
        </div>

    )
}