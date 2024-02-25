import React from "react"
import { Body, Header, Footer } from "./components/index"

export default function App() {
    return (
        //cuando hay más de una etqueta es mejor colocarlas en un contenedor
        // fragment es una etiqueta vacia <> </>
        <>
            <Header  color= '#000' />
            <Body />
            <Footer/>
        </>
    )
}