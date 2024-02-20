import React, { useState } from "react";
import './Promotioncard.css';
import PROMOTION from './Promotion';


const PROMOTIONLIST = () => {
    const [promotioncards, setPromotioncard] = useState([
        {
            id: 1,
            tittle: "Horror",
            image: "https://i.pinimg.com/originals/90/d5/23/90d5230d34e888e334d9a97a199d52a2.jpg",
            description: "",
        },
    ])
    return (
            <div className="container -promotioncard">
                {promotioncards.map(promotioncard => {
                    return (
                    <PROMOTION
                    key={id}
                    tittle={promotioncard.tittle}
                    description={promotioncard.description}
                    image={promotioncard.image}
                    ></PROMOTION>
                    );
                })}
            </div>
        );
};

export default PROMOTIONLIST;

