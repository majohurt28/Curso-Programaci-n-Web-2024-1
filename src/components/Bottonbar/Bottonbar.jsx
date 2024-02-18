import './bottonbar.css'
import React from "react"
import canvas from "./images/canvas.png";
import foryou from "./images/Foryou.png";
import originals from "./images/originals.png";
import threepoints from "./images/three-icon.png";
import user from "./images/user.png";

export function Bottonbar(){
    return(
    <div className="botton-bar" >
        <div className="icon-container">
            <img className='foru-icon' src={foryou}></img>
            <li>FOR YOU</li>
        </div>

         <div className="icon-container">
            <img className='originals-icon' src={originals}></img>
            <li>ORIGINALS</li>
        </div>

        <div className="icon-container">
            <img className="canvas-icon" src={canvas}></img>
            <li>CANVAS</li>
        </div>


        <div className="icon-container">
            <img className='user-icon' src={user}></img>
            <li>MY</li>
        </div>

        <div className="icon-container">
            <img className='more-icon' src={threepoints}></img>
            <li>MORE</li>
        </div>

    </div>
    )
}

export default Bottonbar;