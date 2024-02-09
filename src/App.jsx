import React from "react"
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import  Cardlist  from "./components/Cards/Card";
import  {Carousel} from "./components/Carousel/Carousel";
import NewwebtoonList from "./components/Newwebtoon/Newwebtoon"

/* import  Cardsnew from "./components/Newwebtoon/Newwebtoon"; */

/* import  { Cards } from "./components/Cards/Cards"; */

export default function App() {
    return (
        //cuando hay más de una etqueta es mejor colocarlas en un contenedor
        // fragment es una etiqueta vacia <> </>
        <div style={{

        }}>
            <Header  color= '#000' />
            <Carousel/>
            <Body />
            <Cardlist />


            <Footer />
            <NewwebtoonList/>
        </div>

    )
}