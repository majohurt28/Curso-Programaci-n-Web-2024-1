import React, { useState } from "react";
import heartImg from "./images/heart.png";
import up from "./images/up.png";
import beuty from "./images/belleza.webp";
import freakingRomance from "./images/Maldito.webp";
import fall from "./images/Caida.webp";


const Cards = [
    {
        key: 1,
        name: "Freaking Romance",
        heart: "./images/heart.png",
        likes: "22.3M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://static.wikia.nocookie.net/webtoon/images/5/55/Maldito_romance.jpg/revision/latest?cb=20210909133539&path-prefix=es",
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
    name: "Brass & Sass",
    heart: "./images/heart.png",
    likes: "12.1M",
    Up: "./images/up.png",
    genre: "Romance",
    image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
    },
    {
        key: 4,
        name: "Brass & Sass",
        heart: "./images/heart.png",
        likes: "12.1M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
        },
        {
            key: 5,
            name: "Brass & Sass",
            heart: "./images/heart.png",
            likes: "12.1M",
            Up: "./images/up.png",
            genre: "Romance",
            image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
            },
            {
                key: 6,
                name: "Freaking Romance",
                heart: "./images/heart.png",
                likes: "22.3M",
                Up: "./images/up.png",
                genre: "Romance",
                image: "https://static.wikia.nocookie.net/webtoon/images/5/55/Maldito_romance.jpg/revision/latest?cb=20210909133539&path-prefix=es",
            }, {
                key: 7,
                name: "Brass & Sass",
                heart: "./images/heart.png",
                likes: "12.1M",
                Up: "./images/up.png",
                genre: "Romance",
                image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
            },{
            key: 8,
            name: "Brass & Sass",
            heart: "./images/heart.png",
            likes: "12.1M",
            Up: "./images/up.png",
            genre: "Romance",
            image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
            },
            {
                key: 9,
                name: "Brass & Sass",
                heart: "./images/heart.png",
                likes: "12.1M",
                Up: "./images/up.png",
                genre: "Romance",
                image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
                },
                {
                    key: 10,
                    name: "Brass & Sass",
                    heart: "./images/heart.png",
                    likes: "12.1M",
                    Up: "./images/up.png",
                    genre: "Romance",
                    image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
                    },
]

const Cardlist = () => {

    const Renderlist = () => {
        return Cards.map((value, index) => (
            <div style={{ width: "190px", height:"190px", marginLeft: "15px", marginBottom: "15px" }} className="cardContainer" key={value.key}>
                 <h1 style={{ color: "#000", fontSize:"20px", color: "#000" }}>{value.name}</h1>
                 <img style={{ width: "40px", height:"40px" }} src={up}></img>
                 <img src={value.image}></img>

                <p style={{ height: "17px", width: "20px",  alignItems: "flex-start",display: "flex"}}>
                    <img style={{ width: "15px", height:"15px" }} src={heartImg} ></img>
                    <p style={{ color: "#00dc64", fontWeight: "bolder", marginLeft: "4px", marginTop: "-3px", marginBottom: "2px" }}>{value.likes}</p>
                </p>

                <p style={{ color: "#c00355", fontSize:"17px" }} >{value.genre}</p>

            </div>
        ))

    }

    return (
        <div style={{ width: "1200px", height:"450px", background:"#f4f4f4", position:"absolute", left: "10%", marginLeft: "20px", }}
        className="cardsContainer">
            {Renderlist()}
            <h1 style={{ color: "#000", fontSize:"24px", fontFamily:"hind,simhei,verdana,Helvetica,sans-serif" }}>My Series </h1>
        </div>
    )
}

export default Cardlist;

/* const Cards = () =>{
        {
            key: 1,
            name: "Freaking Romance",
            Heart: './images/heart.png',
            Likes: '22.3M',
            Up: './images/up.png',
            genre: "Romance",
            image: "https://i.pinimg.com/736x/c5/bd/60/c5bd606aa7c49fbf19184afeaefcfbef.jpg",
        },{
            name: "Brass & Sass",
            Heart: "./images/heart.png",
            Likes: "12.1M",
            Up: "./images/up.png",
            genre: "Romance",
            image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",
        },{
            name: "Grim Reaper",
            Heart: "./images/heart.png",
            Likes: "11.4M",
            Up: "./images/up.png",
            genre: "Mysteri",
            image: "https://swebtoon-phinf.pstatic.net/20200216_279/1581819516569qS4b3_JPEG/5.jpg?type=crop540_540",
        },
}

    return (
    <div className="row">
        {cards.map((card, index) => {
            return <Card key={index} name={card.name} img={card.image}/>
        })}
    </div>
    );
};

 */


