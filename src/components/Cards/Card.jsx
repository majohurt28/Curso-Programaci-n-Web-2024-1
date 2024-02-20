import React, { useState } from "react";
import './Card.css'
import heartImg from "./images/heart.png";
import Up from "./images/up.png";


const Cards = [
    {
        id: crypto.randomUUID(),
        name: "Freaking Romance",
        heart: "./images/heart.png",
        likes: "22.3M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://swebtoon-phinf.pstatic.net/20190904_231/1567549472349CgXAk_JPEG/005.jpg?type=crop540_540",
    }, {
    id:crypto.randomUUID(),
        name: "Brass & Sass",
        heart: "./images/heart.png",
        likes: "12.1M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",

        },{
    id:crypto.randomUUID(),
        name: "True Beauty",
        heart: "./images/heart.png",
        likes: "30.1M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://swebtoon-phinf.pstatic.net/20210130_215/1611949454308GeoEx_JPEG/35.jpg?type=crop540_540",
        },
        {
    id:crypto.randomUUID(),
        name: "The Kiss Bet",
        heart: "./images/heart.png",
        likes: "2.6M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://swebtoon-phinf.pstatic.net/20200916_217/1600207772033YLrMN_JPEG/4ADABackground.jpg?type=crop540_540",
        },
        {
    id:crypto.randomUUID(),
        name: "Purple Hyacinth",
        heart: "./images/heart.png",
        likes: "1.8M",
        Up: "./images/up.png",
        genre: "Mystery",
        image: "https://i.pinimg.com/originals/2f/61/0b/2f610bdc3163c6183bde5398194e28bf.jpg",
        },
    {
    id:crypto.randomUUID(),
        name: "Odd Girl Out",
        heart: "./images/heart.png",
        likes: "1.5M",
        Up: "./images/up.png",
        genre: "Drama",
        image: "https://i.pinimg.com/736x/3a/b2/c1/3ab2c1bd459ba1d126bd76e06c5afc9c.jpg",
    }, {
    id:crypto.randomUUID(),
        name: "I Love Yoo",
        heart: "./images/heart.png",
        likes: "4.7M",
        Up: "./images/up.png",
        genre: "Drama",
        image: "https://swebtoon-phinf.pstatic.net/20200222_157/1582327018523Dd8AM_JPEG/5.jpg?type=crop540_540",
        },{
    id:crypto.randomUUID(),
        name: "The Little Trashmaid",
        heart: "./images/heart.png",
        likes: "1.5M",
        Up: "./images/up.png",
        genre: "Comedy",
        image: "https://swebtoon-phinf.pstatic.net/20210512_221/1620803524068sbgtd_JPEG/7b9a0504-bebd-4795-92db-5aa0d8659677.jpg",
        },
        {
    id:crypto.randomUUID(),
        name: "Swett Home",
        heart: "./images/heart.png",
        likes: "4.8M",
        Up: "./images/up.png",
        genre: "Thriller",
        image: "https://swebtoon-phinf.pstatic.net/20191102_266/15726481658710e2gL_JPEG/6.jpg?type=crop540_540",
        },
        {
            id:crypto.randomUUID(),
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
        return Cards.map(({id, name, heart, likes, up, genre, image}) => (
            <div  className="card-container" key={id}>
                <h1>{name}</h1>
                <img className="up-icon1"  src={Up}></img>
                <img className="comic-image" src={image}></img>

                <p className="like-container">
                    <img className="heart-icon" src={heartImg} ></img>
                    <p>{likes}</p>
                </p>

                <p className="genre-info"  >{genre}</p>

            </div>
            ))
    }

    return (
        <div className="cards-container">

            <h1 className="my-series"> My Series </h1>
            {Renderlist()}

        </div>

    )
}

export default Cardlist;


