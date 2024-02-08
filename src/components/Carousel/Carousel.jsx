import './Carousel.css'
import React from "react"

export function Carousel(props){
    return(
        <div style={{height: "500px"}} className='carouselContainer' >
                <img className="Banner" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi3hXTDgeKmxWAosJN6xtbvrIjXF768fnoQ4oOCjTa8Gx4JGzmo40DNRVms90Aw0JCLdcwuqAkxPbOpwRMqPNbRJgd6B1GkTsvEpWmZjMeu5FdyYQW_6tlPXGHgvDQquJs6nePiWV5ATTm/w603-h334/Webtoon%252C+American+Road+Trip+Banner+Art_Logo.png" />
                <img className="Background" src="https://webtoons-static.pstatic.net/image/pc/home_bg004.jpg" />
        </div>
    )}