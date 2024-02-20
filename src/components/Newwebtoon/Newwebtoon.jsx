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
    }, {
        key: 2,
        name: "Sweet Home",
        heart: "./images/heart.png",
        likes: "30.2M",
        Up: "./images/up.png",
        genre: "Horror",
        image: "https://swebtoon-phinf.pstatic.net/20191102_266/15726481658710e2gL_JPEG/6.jpg?type=crop540_540",
    },{
        key: 3,
        name: "#Killstagram",
        heart: "./images/heart.png",
        likes: "28.1M",
        Up: "./images/up.png",
        genre: "Horror",
        image: "https://production.listennotes.com/podcasts/annyeong/ep-46-killstagram-cKAZQdevVti-1oLxrT8RS7B.1400x1400.jpg",
        },{
            key: 4,
            name: "All of Us are Dead",
            heart: "./images/heart.png",
            likes: "10.6M",
            Up: "./images/up.png",
            genre: "Horror",
            image: "https://swebtoon-phinf.pstatic.net/20220128_151/1643374152582KXe7N_PNG/8mo.episode.png?type=crop540_540",
            },
    ]

//Card container for Genres: Romance and Horror
const NewwebtoonList = () =>{

    const renderNewlist = () =>{
    return Webtoonromance.map ((value, index) => (
        <div style={{ width: "192px", fontFamily:"hind,simhei,verdana,Helvetica,sans-serif",  height:"205px", marginLeft: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", backgroundColor: "#ffffff"  }}
        className="card-container2" key={value.key}>

            <h1 style={{ color: "#000", fontSize:"19px", color: "#000", marginTop:"0px" }}>{value.name}</h1>
            <img style={{ width: "45px", height:"45px", zIndex: "20", marginBottom: "2px", marginTop: "-5px"}} src={up}></img>
            <img style={{ width: "190px", height:"177px", zIndex: "10",marginTop: "-45px"}}src={value.image}></img>

            <p className="likeContainer" style={{ height: "17px", width: "20px",  alignItems: "flex-start",display: "flex", backgroundColor: "#ffffff",
                marginTop: "-50px", backgroundColor: "#ffffff"}}>
                <img style={{ width: "15px", height:"15px", zIndex: "30", backgroundColor: "#ffffff", paddingLeft: "-5px", paddingBottom: "32px",
                paddingTop: "6px", marginTop: "-3px",}}src={heartImg} ></img>
                <p style={{ color: "#00dc64", fontWeight: "bolder", marginLeft: "0px", marginTop: "-3px",
                marginBottom: "2px", backgroundColor: "#ffffff", zIndex: "35", paddingRight: "138px", paddingLeft: "10px", paddingBottom: "26px",
                paddingTop: "3px" }}>{value.likes}</p>
            </p>

            <p style={{ color: "#c00355", fontSize:"16px", zIndex: "40", marginTop: "-6px"}} >{value.genre}</p>
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
            {renderNewlist()}


    </div>
)
}



export default NewwebtoonList;

