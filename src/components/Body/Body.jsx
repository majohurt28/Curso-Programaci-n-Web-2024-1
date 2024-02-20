import React from "react"
import  Cardlist  from "../Cards/Card";
import Thriller from "../Newwebtoon/Thriller"
import NewwebtoonList from "../Newwebtoon/Newwebtoon"
import  {Carousel} from "../Carousel/Carousel";
import { Schedule } from "../Schedule/Schedule";
import Promotionlist from "../Cards/Promotioncard";

/* import PROMOTIONLIST from "../Cards/Promotioncard" */
//importar react en cada archivo

export function Body(props){
    const{Color} = props
    return(
        <main style= {{backgroundColor: Color}}>
            <Carousel></Carousel>
            <Schedule></Schedule>
            <Cardlist></Cardlist>
            <NewwebtoonList></NewwebtoonList>
            <Thriller></Thriller>
            <Promotionlist></Promotionlist>
        </main>
    )
}