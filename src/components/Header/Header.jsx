import React from "react"
import "./Header.css"
import book from "./libro.png"
import len from "./lens.png"

export function Header(props) {
    const { content, color } = props
    return (
        <header style={{
        }}>

        <div className="options" style= {{}}>
            <img  style={{ width: "100px", height: "97"}} className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png" />
            <nav >
                <ul style= {{display: "flex", flexDirection: "row", fontSize: "20px", marginLeft: "10px", paddingLeft: "20px", marginTop: "40px",  }}>
                <li> ORIGINALS</li>
                <li> GENRES</li>
                <li> POPULAR</li>
                <li> CANVAS</li>
                </ul>
            </nav>
        </div>

        <div className="buttonContainer">
                <h1>WEBTOON SHOP</h1>
                <h2><img className="bookIcon" src={book}></img>Creators 101</h2>
                <button className="publish-button" >
                Publish</button>

                <button className="user-button" >
                majo osorio</button>
                <button className="len-button"><img  style={{}} className="len-icon"src={len}></img></button>
            </div>
            {/* <div className="len-container">
                <img style={{width: "40px", height: "40px"}} src={len}></img>
            </div> */}

           {/*  <div>
            <img className="Banner" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi3hXTDgeKmxWAosJN6xtbvrIjXF768fnoQ4oOCjTa8Gx4JGzmo40DNRVms90Aw0JCLdcwuqAkxPbOpwRMqPNbRJgd6B1GkTsvEpWmZjMeu5FdyYQW_6tlPXGHgvDQquJs6nePiWV5ATTm/w603-h334/Webtoon%252C+American+Road+Trip+Banner+Art_Logo.png" />
                <img className="Background" src="https://webtoons-static.pstatic.net/image/pc/home_bg004.jpg" />
            </div>
 */}




            {/* <div className="bar-container" style={{
                width: "1518pxs", position: "relative", left: "0px", top: "-26px"




            </div> */}

        </header>
    )
}

