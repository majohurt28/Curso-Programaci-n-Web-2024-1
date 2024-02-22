import React from "react"
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import {Footer} from "./components/Footer/Footer"


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