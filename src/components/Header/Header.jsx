import React from "react"

export function Header(props){
    const { content, color } = props
    return (
        <header style={{
            color: color,

        }}>

            <div style={{

            }}>
                <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png"/>
                <header>
                    <h1> GENRES</h1>
                    <h1> POPULAR</h1>
                    <h1> CANVAS</h1>
                </header>
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
