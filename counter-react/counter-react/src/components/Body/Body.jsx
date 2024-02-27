import React, { useRef, useState } from "react";
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
                        <Button className={Decreasebtn.className} clickFunction={Decreasebtn.OnClickFunction} text={Decreasebtn.text} />

                        {/* <button className="decrease-btn" onClick={decrementCounter} type="substract">Decrease</button> */}
                        <CounterComponent count={count}></CounterComponent>
                        <Button className={Increasebtn.className} clickFunction={Increasebtn.OnClickFunction} text={Increasebtn.text} />
                        {/*  <button className="increase-btn" onClick={incrementCounter} type="add">Increase</button> */}
                    </div>
                </div>



                <button className="reset-btn" onClick={resetCounter} type="reset">Reset</button>
            </div>
        </main>
    )
}