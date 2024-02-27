import React, { useRef, useState } from "react";
import './Body.css'
/* import { MONSTERHIGH} from '../../const/Links' */
import { CounterComponent } from "../Counter/Counter";

export function Body(props) {

    const startCount = 0;
    const [count, setCount] = useState(startCount);

    const Monstercards = [
        {
            id: 1,
            image: 'https://i.pinimg.com/564x/03/8f/fc/038ffce7456a0b8ae3f39a61c9fb9a56.jpg',
            tittle: 'Draculaura',
        },
        {
            id: 2,
            tittle: 'Cleo de Nile',
            image: 'https://i.pinimg.com/564x/63/f1/a1/63f1a132c954f3facf5083a79ebd757d.jpg',
        },
        {
            id: 3,
            tittle: 'Frankei Stein',
            image: 'https://i.pinimg.com/564x/6c/c4/86/6cc4862f8cac620a0108bf87a0baa1b8.jpg',
        },
        {
            id: 4,
            tittle: 'Laguna Blue',
            image: 'https://i.pinimg.com/564x/ce/db/94/cedb94f817ed92566edb051d5b1487b9.jpg',
        }
    ];

    const getCard = () => {
        const data = count % Monstercards.length;
        return Monstercards[data];
    };

    const incrementCounter = () => {
        setCount(count + 1);
    };

    const decrementCounter = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const resetCounter = () => {
        setCount(startCount);
    };

    return (
        <main>
            <h1 className="counter-tittle">Monster High Counter</h1>

            <div className="counter-global">
                <div className="card-character">
                    <img className="monster-character" src={getCard().image}></img>
                    <p>{getCard().tittle}</p>
                </div>
                <div className="counter-cont">
                    <div className="btn-container">
                        <button className="decrease-btn" onClick={decrementCounter} type="substract">Decrease</button>
                        <CounterComponent count={count}></CounterComponent>
                        <button className="increase-btn" onClick={incrementCounter} type="add">Increase</button>
                    </div>
                </div>
                <button className="reset-btn" onClick={resetCounter} type="reset">Reset</button>
            </div>

        </main>
    )
}