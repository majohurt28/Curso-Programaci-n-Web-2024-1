import React, { useState } from "react";
import heartImg from "./images/heart.png";
import up from "./images/up.png";


const Cards = [
    {
        key: 1,
        name: "Freaking Romance",
        heart: "./images/heart.png",
        likes: "22.3M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://swebtoon-phinf.pstatic.net/20190904_231/1567549472349CgXAk_JPEG/005.jpg?type=crop540_540",
    }, {
        key: 2,
        name: "Brass & Sass",
        heart: "./images/heart.png",
        likes: "12.1M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
    },{
    key: 3,
    name: "True Beauty",
    heart: "./images/heart.png",
    likes: "30.1M",
    Up: "./images/up.png",
    genre: "Romance",
    image: "https://swebtoon-phinf.pstatic.net/20210130_215/1611949454308GeoEx_JPEG/35.jpg?type=crop540_540",
    },
    {
        key: 4,
        name: "The Kiss Bet",
        heart: "./images/heart.png",
        likes: "2.6M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://swebtoon-phinf.pstatic.net/20200916_217/1600207772033YLrMN_JPEG/4ADABackground.jpg?type=crop540_540",
        },
        {
            key: 5,
            name: "Purple Hyacinth",
            heart: "./images/heart.png",
            likes: "1.8M",
            Up: "./images/up.png",
            genre: "Mystery",
            image: "https://i.pinimg.com/originals/2f/61/0b/2f610bdc3163c6183bde5398194e28bf.jpg",
            },
            {
                key: 6,
                name: "Odd Girl Out",
                heart: "./images/heart.png",
                likes: "1.5M",
                Up: "./images/up.png",
                genre: "Drama",
                image: "https://i.pinimg.com/736x/3a/b2/c1/3ab2c1bd459ba1d126bd76e06c5afc9c.jpg",
            }, {
                key: 7,
                name: "I Love Yoo",
                heart: "./images/heart.png",
                likes: "4.7M",
                Up: "./images/up.png",
                genre: "Drama",
                image: "https://swebtoon-phinf.pstatic.net/20200222_157/1582327018523Dd8AM_JPEG/5.jpg?type=crop540_540",
            },{
            key: 8,
            name: "The Little Trashmaid",
            heart: "./images/heart.png",
            likes: "1.5M",
            Up: "./images/up.png",
            genre: "Comedy",
            image: "https://swebtoon-phinf.pstatic.net/20210512_221/1620803524068sbgtd_JPEG/7b9a0504-bebd-4795-92db-5aa0d8659677.jpg",
            },
            {
                key: 9,
                name: "Swett Home",
                heart: "./images/heart.png",
                likes: "4.8M",
                Up: "./images/up.png",
                genre: "Thriller",
                image: "https://swebtoon-phinf.pstatic.net/20191102_266/15726481658710e2gL_JPEG/6.jpg?type=crop540_540",
                },
                {
                    key: 10,
                    name: "Marionette",
                    heart: "./images/heart.png",
                    likes: "12.1M",
                    Up: "./images/up.png",
                    genre: "Fantasy",
                    image: "https://swebtoon-phinf.pstatic.net/20221221_257/16715911124069ygIW_JPEG/7Marionetta_landingpage_mobile.jpg?type=crop540_540",
                    },
]

const Cardlist = () => {
/**Card cointainer: Name, Up image, Background, Heart icon, "like", genre */
const Renderlist = () => {
    return Cards.map((value, index) => (
        <div style={{ width: "192px", fontFamily:"hind,simhei,verdana,Helvetica,sans-serif",  height:"205px", marginLeft: "15px", marginBottom: "15px", display: "flex", flexDirection: "column", backgroundColor: "#ffffff"  }} className="cardContainer" key={value.key}>

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
        <div style={{ width: "1200px", height:"500px", background:"#f4f4f4", position:"absolute", left: "10%", marginLeft: "20px",
     }}

        className="cardsContainer">
         {/* <h1 style={{ color: "#000", fontSize:"24px", fontFamily:"hind,simhei,verdana,Helvetica,sans-serif", height: "40px", marginTop: "-300px" }}>My Series </h1> */}

            {Renderlist()}

        </div>

    )
}

export default Cardlist;


