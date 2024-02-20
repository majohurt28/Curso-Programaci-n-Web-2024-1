import React, { useState } from "react";
import './Promotioncard.css';

/* import PROMOTION from './Promotion'; */


const Promotioncards = [
    {
        id: crypto.randomUUID(),
        tittle: "Freaking Romance",
        description: "Romance",
        image: "https://i.pinimg.com/originals/90/d5/23/90d5230d34e888e334d9a97a199d52a2.jpg",
    }, {
        id:crypto.randomUUID(),
        tittle: "Pride Month",
        description: "Romance",
        image: " https://pm1.aminoapps.com/7217/142ee3ec4ab6e43894d926e91be68449036b04e6r1-943-492v2_uhq.jpg",

        },{
        id:crypto.randomUUID(),
        tittle: "Boyfriends Vol 1",
        description: "Romance",
        image: "https://shop.refrainbow.com/cdn/shop/files/Banner_-_Desktop_New_Items.png?v=1693582730&width=3840",
        },
]

const Promotionlist = () => {
/**Card cointainer: Name, Up image, Background, Heart icon, "like", genre */
    const Renderpromlist = () => {
        return Promotioncards.map(({id, name,  genre, image}) => (
            <div  className="card-promotion" key={id}>
                <h1>{name}</h1>

                <img className="promotion-img" src={image}></img>
                <p>{genre}</p>

            </div>
            ))
    }

    return (
        <div className="cards-promotion">

            <h1 className="my-promotion"> My Promotion </h1>
            {Renderpromlist()}

        </div>

    )
}

export default Promotionlist ;

