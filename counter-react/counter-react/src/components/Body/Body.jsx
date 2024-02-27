import React, { useState } from "react";
import './Body.css'
import { Monstercards } from '../../const/Links'
import { CounterComponent } from "../Counter/Counter";
import { Button } from '../Buttons/Buttons'

export function Body() {
    const startCount = 0;
    const [count, setCount] = useState(startCount);

    const getCard = () => {
        const data = count % Monstercards.length;
        return Monstercards[data];
    };

    const incrementCounter = (e) => {
        setCount(count + 1);
    };

    const decrementCounter = (e) => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const resetCounter = (e) => {
        setCount(startCount);
    };

    /** Constants that contain the labels that will be called on the buttons*/
    const Increasebtn = {
        className: 'increase-btn',
        OnClickFunction: incrementCounter,
        text: 'Increase'
    }

    const Decreasebtn = {
        className: 'decrease-btn',
        OnClickFunction: decrementCounter,
        text: 'Decrease'
    }

    const Resetbtn = {
        className: 'reset-btn',
        OnClickFunction: resetCounter,
        text: 'Reset'
    }

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
                        <Button className={Decreasebtn.className} OnClickFunction={Decreasebtn.OnClickFunction} text={Decreasebtn.text} />
                        <CounterComponent count={count}></CounterComponent>
                        <Button className={Increasebtn.className} OnClickFunction={Increasebtn.OnClickFunction} text={Increasebtn.text} />
                    </div>
                </div>

                <Button className={Resetbtn.className} OnClickFunction={Resetbtn.OnClickFunction} text={Resetbtn.text} />

            </div>
        </main>
    )
}