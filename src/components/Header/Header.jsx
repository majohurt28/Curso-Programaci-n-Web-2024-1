import React from "react"
import "./Header.css"

export function Header(props) {
    const { content, color } = props
    return (
        <header style={{
            color: color,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            backgroundColor: "#ffffff",
            fontFamily:"hind,simhei,verdana,Helvetica,sans-serif",
            width: "100%",


        }}>
        <div style= {{display: "flex", flexDirection: "row", marginLeft: "-100px", width: "630px", fontSize: "20px", fontWeight: "700"}}>
            <img  style={{ width: "100px", height: "97"}} className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png" />
            <nav >
                <ul style= {{display: "flex", flexDirection: "row", fontSize: "20px", marginLeft: "10px", paddingLeft: "20px", marginTop: "40px" }}>
                <li> ORIGINALS</li>
                <li> GENRES</li>
                <li> POPULAR</li>
                <li> CANVAS</li>
                </ul>
            </nav>
        </div>

        <div className="buttonContainer" style= {{display: "flex", flexDirection: "row", marginTop: "16px"}}>
                <h1>WEBTOON SHOP</h1>
                <h2>Creators 101</h2>
                <button style={{background: "#2f2f2f",
                                borderRadius: "17px",
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: "500",
                                height: "33px", width: "104px",
                                marginLeft: "9px"}}>
                Publish</button>

                <button style={{backgroundColor: "#ffffff",
                                borderRadius: "17px",
                                color: "#7f7f7f",
                                fontSize: "13px",
                                fontWeight: "500",
                                borderColor: "#b4b4b4",
                                lineHeight: "31px",
                                height: "33px", width: "104px",
                                marginLeft: "7px"}}>
                majo osorio</button>
            </div>

           {/*  <div>
            <img className="Banner" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi3hXTDgeKmxWAosJN6xtbvrIjXF768fnoQ4oOCjTa8Gx4JGzmo40DNRVms90Aw0JCLdcwuqAkxPbOpwRMqPNbRJgd6B1GkTsvEpWmZjMeu5FdyYQW_6tlPXGHgvDQquJs6nePiWV5ATTm/w603-h334/Webtoon%252C+American+Road+Trip+Banner+Art_Logo.png" />
                <img className="Background" src="https://webtoons-static.pstatic.net/image/pc/home_bg004.jpg" />
            </div>
 */}




            {/* <div className="bar-container" style={{
                width: "1518pxs", position: "relative", left: "0px", top: "-26px"

            }}>

                <div style={{ width: "300px", marginLeft: "30px" }}>
                    <img style={{ marginLeft: "14px", top: "10px", width: "90px", height: "90px" }} className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png" />

                    <h1> ORIGINALS</h1>
                    <h1> GENRES</h1>
                    <h1> POPULAR</h1>
                    <h1> CANVAS</h1>

                    <span style={{ color: "#00dc64", fontweight: "900", fontSize: "20px", width: "156px" }}>WEBTOON SHOP</span>
                    <h1 style={{ color: "#000", width: "90px" }}> Creators 101</h1>
                    <button style={{ borderRadius: "20px" }}>Publish </button>
                </div>




                <img className="mobilBack" src="https://static.wikia.nocookie.net/webtoon/images/0/04/C%C3%B3mo_domar_una_fiera_encantadora.jpg/revision/latest/smart/width/250/height/250?cb=20210926185028&path-prefix=es" />
                <img className="Banner" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi3hXTDgeKmxWAosJN6xtbvrIjXF768fnoQ4oOCjTa8Gx4JGzmo40DNRVms90Aw0JCLdcwuqAkxPbOpwRMqPNbRJgd6B1GkTsvEpWmZjMeu5FdyYQW_6tlPXGHgvDQquJs6nePiWV5ATTm/w603-h334/Webtoon%252C+American+Road+Trip+Banner+Art_Logo.png" />
                <img className="Background" src="https://webtoons-static.pstatic.net/image/pc/home_bg004.jpg" />



            </div> */}

        </header>
    )
}

/*     return(
        <header style= {{backgroundColor: Color}}>Buenas noches</header>
    )
}
 */

