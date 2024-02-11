import React, { useState } from "react";
import  "./Newwebtoon.css"
import heartImg from "./images/heart.png";
import up from "./images/up.png";

const Webtoonthriller = [
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
        name: "True Beauty",
        heart: "./images/heart.png",
        likes: "30.1M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://swebtoon-phinf.pstatic.net/20210130_215/1611949454308GeoEx_JPEG/35.jpg?type=crop540_540",
        },{
            key: 4,
            name: "True Beauty",
            heart: "./images/heart.png",
            likes: "30.1M",
            Up: "./images/up.png",
            genre: "Romance",
            image: "https://swebtoon-phinf.pstatic.net/20210130_215/1611949454308GeoEx_JPEG/35.jpg?type=crop540_540",
            },
    ]

    const Thriller = () =>{

        const renderThriller = () =>{
        return Webtoonthriller.map ((value, index) => (
            <div style={{ width: "192px", fontFamily:"hind,simhei,verdana,Helvetica,sans-serif",
                        height:"205px", marginLeft: "15px", marginBottom: "15px", display: "flex",
                        flexDirection: "column", backgroundColor: "#ffffff"  }} className="cardContainer3"
                        key={value.key}>

                <h1 style={{ color: "#000", fontSize:"19px", color: "#000", marginTop:"0px" }}>{value.name}</h1>
                <img style={{ width: "45px", height:"45px", zIndex: "20", marginBottom: "2px", marginTop: "-5px"}} src={up}></img>
                <img style={{ width: "190px", height:"177px", zIndex: "10",marginTop: "-45px"}}src={value.image}></img>

                <p className="likeContainer" style={{ height: "17px", width: "20px",
                        alignItems: "flex-start",display: "flex", backgroundColor: "#ffffff",
                        marginTop: "-50px", backgroundColor: "#ffffff"}}>

                            <img style={{ width: "15px", height:"15px", zIndex: "30", backgroundColor: "#ffffff",
                                            paddingLeft: "-5px", paddingBottom: "32px",
                                            paddingTop: "6px", marginTop: "-3px",}}
                            src={heartImg} ></img>

                            <p style={{ color: "#00dc64", fontWeight: "bolder", marginLeft: "0px", marginTop: "-3px",
                                            marginBottom: "2px", backgroundColor: "#ffffff", zIndex: "35",
                                            paddingRight: "138px", paddingLeft: "10px", paddingBottom: "26px",
                                            paddingTop: "3px" }}>
                            {value.likes}</p>
                </p>

                <p style={{ color: "#c00355", fontSize:"16px", zIndex: "40", marginTop: "-6px"}} >
                {value.genre}</p>
            </div>
        ))
    }



        return (
            <div style={{ width: "1200px", height:"250px",
                        background:"#f4f4f4", position:"absolute",
                        left: "10%", marginLeft: "20px", marginTop: "870px",
                         }} className="cardsContainer3">

                    <div className="Horror" style={{
                        width: "212px", fontFamily:"hind,simhei,verdana,Helvetica,sans-serif",
                        height:"225px", marginLeft: "15px",
                        marginBottom: "15px", display: "flex",
                        flexDirection: "column", backgroundColor: "#c00355" }} >
                            <div className="info-genre">
                                <strong>Thriller<em className="em-info" style={{marginLeft: "91px"}}> | </em></strong>
                                <p>Chill, Shiver and Shudder</p>
                            </div>
             </div>

            {renderThriller()}


            </div>
        )
        }

        export default Thriller;
