import React, { useState } from "react";
import "./Thriller.css"
import heartImg from "./images/heart.png";
import up from "./images/up.png";

const Webtoonthriller = [
    {
        key: 1,
        name: "School Bus Graveyard",
        heart: "./images/heart.png",
        likes: "1.6M",
        Up: "./images/up.png",
        position: "1",
        genre: "Thriller",
        image: "https://swebtoon-phinf.pstatic.net/20210709_280/1625772588431xNuCK_JPEG/4SchoolBusGraveyardLaunch_mobile_landingpage.jpg?type=crop540_540",
    }, {
        key: 2,
        name: "Everything is fine",
        heart: "./images/heart.png",
        likes: "2.1M",
        Up: "./images/up.png",
        position: "2",
        genre: "Thriller",
        image: "https://swebtoon-phinf.pstatic.net/20210926_97/1632592684598uTWm3_PNG/0MicrosoftTeams-image+283229.png?type=crop540_540",
    }, {
        key: 3,
        name: "Not Even Bones",
        heart: "./images/heart.png",
        likes: "3.3M",
        Up: "./images/up.png",
        position: "3",
        genre: "Thriller",
        image: "https://swebtoon-phinf.pstatic.net/20210626_62/1624641312439ABewh_JPEG/1NEB_mobile_landingpage.jpg?type=crop540_540",
    }, {
        key: 4,
        name: "It's mine",
        heart: "./images/heart.png",
        likes: "5.1M",
        Up: "./images/up.png",
        position: "4",
        genre: "Thriller",
        image: "https://swebtoon-phinf.pstatic.net/20210127_267/1611706477751xp4W9_JPEG/3Its-Mine-Mobile-Landing-Page.jpg?type=crop540_540",
    },
]

const Thriller = () => {
    const renderThriller = () => {
        return Webtoonthriller.map((value, index) => (

            <div className="card-container3" key={value.key}>

                <h1>{value.name}</h1>
                <img className="up-icon3" src={up}></img>
                <h1></h1>
                <img className="comic-image3" src={value.image}></img>
                <h2 className="trending-position"  >{value.position}</h2>
                <p className="like-container3">
                    <img className="heart-icon3" src={heartImg} ></img>
                    <p>{value.likes}</p>
                </p>
                <p className="genre-info3"  >{value.genre}</p>
            </div>
        ))
    }



    return (
        <div style={{}} className="cards-container3">

            <div className="thriller-info" style={{}} >
                <div className="info-genre3">
                    <strong>Thriller
                        <em className="em-info" > | </em>
                    </strong>
                    <p>Chill, Shiver and Shudder</p>
                </div>
            </div>
            <h1 className="trending-thriller"> Trending Thriller🔥</h1>

            {renderThriller()}


        </div>
    )
}

export default Thriller;
