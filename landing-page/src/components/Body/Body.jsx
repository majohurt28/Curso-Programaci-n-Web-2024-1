import React from "react"
import './Body.css'
import  Cardlist  from "../Cards/Card";
import Thriller from "../Newwebtoon/Thriller"
import NewwebtoonList from "../Newwebtoon/Newwebtoon"
import  {Carousel} from "../Carousel/Carousel";
import { Schedule } from "../Schedule/Schedule";
import {Promotionsection} from "../Cards/Promotioncard";

/* import PROMOTIONLIST from "../Cards/Promotioncard" */
//importar react en cada archivo

export function Body(props){
    const{Color} = props
    return(
        <main style= {{backgroundColor: Color}}>
            <Carousel></Carousel>
            <Schedule></Schedule>
            <Cardlist></Cardlist>
            <h1 className="trending-horror"> Trending Horror 🔥 </h1>
            <NewwebtoonList></NewwebtoonList>
            <h1 className="trending-thriller"> Trending Thriller🔥</h1>
            <Thriller></Thriller>
            <h1 className="my-promotion"> PROMOTION </h1>
            <Promotionsection></Promotionsection>
        </main>
    )
}