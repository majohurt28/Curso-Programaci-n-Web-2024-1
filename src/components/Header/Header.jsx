import React, { useState } from "react"
import "./Header.css"
import { LINKS } from '../../const/links'
import book from "./libro.png"
import len from "./lens.png"

export function Header(props) {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = (e) => {
    setShowMenu(!showMenu)
    }

const { content, color } = props
    return (
        <header>

            <div className="options" style= {{}}>
                <img  style={{ width: "100px", height: "97"}} className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png" />
                <nav>
                    <ul className="li-style" >
                    <li> ORIGINALS</li>
                    <li> GENRES</li>
                    <li> POPULAR</li>
                    <li> CANVAS</li>
                    </ul>
                </nav>
            </div>

            <div className="button-container">
                    <h1>WEBTOON SHOP</h1>
                    <h2>
                        <img className="bookIcon" src={book}></img>Creators 101
                    </h2>
                    <button className="publish-button" >Publish</button>
                    <button className="user-button" >Log In</button>
                    <button className="len-button" >
                    <img  className="len-icon" alt='Hamburger button' src={len}></img>
                    </button>

            </div>

            <Menu items={LINKS} showMenu={showMenu}/>
            <button
                id='hamburguer-btn'
                onClick={handleShowMenu}
            >

            </button>



        </header>
        )
}


function Menu ({ items, showMenu }) {
    return (
    <nav className={!showMenu ? 'hidden' : ''}>
        <ul className="menu-content">
          {
            items.map((item) =>
                <MenuItem
                  item={item}
                  key={item.id}
                />)
            }
        </ul>
    </nav>
    )
  }

  function MenuItem ({ item }) {
    const { text } = item
    return (
      <li>
        <a href=''>{text}</a>
      </li>
    )
  }

