import React from "react"

export function Header(props){
    const { content, color } = props
    return (
        <header style={{
            color: color,

        }}>

            <div className="bar-container" style={{ width: "1518pxs", position: "relative", left:"0px", top: "-26px"

            }}>

                <header style={{width: "300px", marginLeft: "30px"}}>
                <img style={{ marginLeft: "14px",top: "10px", width:"90px", height: "90px"}} className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png"/>
                <div></div>
                <h1> ORIGINALS</h1>
                    <h1> GENRES</h1>
                    <h1> POPULAR</h1>
                    <h1> CANVAS</h1>
                </header>




                <img className="mobilBack" src= "https://static.wikia.nocookie.net/webtoon/images/0/04/C%C3%B3mo_domar_una_fiera_encantadora.jpg/revision/latest/smart/width/250/height/250?cb=20210926185028&path-prefix=es" />
                <img className="Banner" src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi3hXTDgeKmxWAosJN6xtbvrIjXF768fnoQ4oOCjTa8Gx4JGzmo40DNRVms90Aw0JCLdcwuqAkxPbOpwRMqPNbRJgd6B1GkTsvEpWmZjMeu5FdyYQW_6tlPXGHgvDQquJs6nePiWV5ATTm/w603-h334/Webtoon%252C+American+Road+Trip+Banner+Art_Logo.png" />
                <img className="Background" src= "https://webtoons-static.pstatic.net/image/pc/home_bg004.jpg" />



            </div>

        </header>
    )
}

/*     return(
        <header style= {{backgroundColor: Color}}>Buenas noches</header>
    )
}
 */
