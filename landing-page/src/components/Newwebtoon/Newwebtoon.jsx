import React, { useState } from "react";
import  "./Newwebtoon.css"

import heartImg from "./images/heart.png";
import up from "./images/up.png";

const Webtoonromance = [
    {
        key: 1,
        name: "Don't Read This",
        heart: "./images/heart.png",
        likes: "1.3M",
        Up: "./images/up.png",
        genre: "Horror",
        image: "https://swebtoon-phinf.pstatic.net/20240110_186/1704854140792KTNWo_JPEG/2LandingPage_mobile.jpg?type=crop540_540",
        position: "1",
    }, {
        key: 2,
        name: "Sweet Home",
        heart: "./images/heart.png",
        likes: "30.2M",
        Up: "./images/up.png",
        genre: "Horror",
        image: "https://swebtoon-phinf.pstatic.net/20191102_266/15726481658710e2gL_JPEG/6.jpg?type=crop540_540",
        position: "2",
    },{
        key: 3,
        name: "#Killstagram",
        heart: "./images/heart.png",
        likes: "28.1M",
        Up: "./images/up.png",
        genre: "Horror",
        image: "https://production.listennotes.com/podcasts/annyeong/ep-46-killstagram-cKAZQdevVti-1oLxrT8RS7B.1400x1400.jpg",
        position: "3",
    },{
            key: 4,
            name: "All of Us are Dead",
            heart: "./images/heart.png",
            likes: "10.6M",
            Up: "./images/up.png",
            genre: "Horror",
            image: "https://swebtoon-phinf.pstatic.net/20220128_151/1643374152582KXe7N_PNG/8mo.episode.png?type=crop540_540",
            position: "4",
        },
    ]

//Card container for Genres: Romance and Horror
const NewwebtoonList = () =>{

    const renderNewlist = () =>{
    return Webtoonromance.map ((value, index) => (
        <div
        className="card-container2" key={value.key}>

            <h1 >{value.name}</h1>
            <img className="up-icon2"  src={up}></img>
            <img className="horror-image" src={value.image}></img>
            <h2 className="trending-position1"  >{value.position}</h2>
            <p className="like-container2" >
                <img className="heart-icon2" src={heartImg} ></img>
                <p className="number-likes" >{value.likes}</p>
            </p>
            <p className="horror-genre" >{value.genre}</p>

        </div>
        ))
    }






return (
    <div className="cards-container2">
             <h1  className="main-genre"> GENRES </h1>

            <div className="horror-container" style={{
               }} >
                    <div className="info-genre">
                        <strong>Horror<em> | </em></strong>
                        <p>Do you love being scared?</p>
                    </div>
            </div>
            <h1 className="trending-horror"> Trending Horror 🔥 </h1>
            {renderNewlist()}


    </div>
)
}



export default NewwebtoonList;

