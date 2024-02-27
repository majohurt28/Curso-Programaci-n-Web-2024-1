import React, { useState } from "react"
import "./Header.css"

export function Header(props) {
    return (
        <header>
            <div className="logo-cont">
            <img className="monster-logo" src="https://images.mattel.net/image/upload/w_1944,c_scale/shop-contentstack/blt01c59e508b6d9a1a/63372ccda920fd42f67e8353/Brand_Bar_Logo_Monster-High_1334x309.png"></img>
            </div>
            <div className="banner-cont">
                <div className="info-cont">
                    <h1>Welcome to the Monster High Counter</h1>
                    <h2>This counter is dedicated to the characters of the
                        Monster High series. Here you will find different characters from the series. You just have to press the buttons to find new cards.</h2>
                </div>
                <img className="monster-banner" src="https://images.mattel.net/image/upload/w_1944,c_scale/shop-contentstack/blt407b1fdafaf6ac70/633393c67feae2235fc39926/MH_Campaign_1_Hero_3840x1200_D.jpg"></img>
            </div>

            </header>
    )
}