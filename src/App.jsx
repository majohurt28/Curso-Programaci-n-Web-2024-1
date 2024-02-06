import React from "react"
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import  Cardlist  from "./components/Cards/Card";

/* import  { Cards } from "./components/Cards/Cards"; */

export default function App() {
    return (
        //cuando hay más de una etqueta es mejor colocarlas en un contenedor
        // fragment es una etiqueta vacia <> </>
        <div>
            <Header  color= '#000' />
            <Body />
            <Cardlist />
            <Footer />
        </div>

    )
}