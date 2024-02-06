import React, {useState} from "react";

const Cards = [
    {
        key: 1,
        name: "Freaking Romance",
        heart: "./images/heart.png",
        likes: "22.3M",
        Up: "./images/up.png",
        genre: "Romance",
        image: "https://i.pinimg.com/736x/c5/bd/60/c5bd606aa7c49fbf19184afeaefcfbef.jpg",
    },{
        key: 2,
        name: "Brass & Sass",
        heart: "./images/heart.png",
            likes: "12.1M",
            Up: "./images/up.png",
            genre: "Romance",
            image: "https://pbs.twimg.com/media/Ec2Z575X0AAmK0t?format=webp&name=small",


    }
]

const Cardlist = () => {

    const Renderlist = () =>{
        return Cards.map((value, index) => (
            <div className="cardContainer" key={ value.key}>
                    <h1 style={{ color: "#000" }}>{ value.name }</h1>
                    <p>{ value.likes}</p>
                    <p>{ value.genre}</p>

                </div>
        ))

    }

    return(
        <div className="cardsContainer">
            {Renderlist()}
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


