import React, { useRef, useState } from "react";
import './Promotioncard.css';
import Arrow from "./images/arrow.png";

export function Promotionsection () {
    const containerRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scroll = (scrollOffset) => {
        if (containerRef.current) {
        const newScrollLeft = scrollLeft + scrollOffset;
        containerRef.current.scrollLeft = newScrollLeft;
        setScrollLeft(newScrollLeft);
        }
    };


const Promotioncards = [
        {
            id: crypto.randomUUID(),
            tittle: "Morgana and Oz",
            description: "Read 3 more new episodes on the app if you invite a friend!",
            image: "https://i.pinimg.com/originals/90/d5/23/90d5230d34e888e334d9a97a199d52a2.jpg",
        }, {
            id:crypto.randomUUID(),
            tittle: "Pride Month",
            description: "It's the gayest time of the year! 🌈 And we’re here to share our #Pride Collection that spotlights LGBTQIA+ creators and characters.",
            image: " https://pm1.aminoapps.com/7217/142ee3ec4ab6e43894d926e91be68449036b04e6r1-943-492v2_uhq.jpg",

            },{
            id:crypto.randomUUID(),
            tittle: "Boyfriends Vol 1",
            description: "Purple Hyacinth S2 will launch on July 14th, 2020. - We are going to have 4 fastpass",
            image: "https://i.pinimg.com/736x/1c/e5/43/1ce54327c75e83482ef39e9bb8f6ef9d.jpg",
            },
            {
                id:crypto.randomUUID(),
                tittle: "Boyfriend",
                description: "Discount in the new merch of the BL Webtoon Boyfriend Vol.2",
                image: "https://shop.refrainbow.com/cdn/shop/files/Banner_-_Desktop_New_Items.png?v=1693582730&width=3840",
                },
    ];

/**Card cointainer: Name, Up image, Background, Heart icon, "like", genre **/
    const Renderpromlist = () => {
        return Promotioncards.map(({id, tittle,  description, image}) => (
            <div  className="card-promotion" key={id}>

                <div className="information-cont">
                    <h1>{tittle}</h1>                    <p>{description}</p>
                </div>
                <img className="promotion-img" src={image}></img>

            </div>
        ))
    }

    return (
        <div className="promotion-cont">
            <div className="left-button" >
                <button onClick={() => scroll(-130)}>
                    <img src={Arrow}></img>
                </button>
            </div>
            <h1 className="promotion-tittle">Promotion</h1>
            <div className="cards-promotion" ref={containerRef}>
                {Renderpromlist()}
            </div>
            <div className="right-button">
                <button  onClick={() => scroll(130)}>
                    <img src={Arrow}></img>
                </button>
            </div>
        </div>
        )
    };



