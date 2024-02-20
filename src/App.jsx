import React from "react"
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import Bottonbar from "./components/Bottonbar/Bottonbar"

export default function App() {
    return (
        //cuando hay más de una etqueta es mejor colocarlas en un contenedor
        // fragment es una etiqueta vacia <> </>
        <div style={{

        }}>
            <Header  color= '#000' />
            <Body />
            <Bottonbar/>

        </div>

    )
}