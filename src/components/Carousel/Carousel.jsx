import './Carousel.css'
import React from "react"

export function Carousel(props){
    return(
        <div  className='carousel-container' >
                <img className="Banner" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi3hXTDgeKmxWAosJN6xtbvrIjXF768fnoQ4oOCjTa8Gx4JGzmo40DNRVms90Aw0JCLdcwuqAkxPbOpwRMqPNbRJgd6B1GkTsvEpWmZjMeu5FdyYQW_6tlPXGHgvDQquJs6nePiWV5ATTm/w603-h334/Webtoon%252C+American+Road+Trip+Banner+Art_Logo.png" />
                <div className='announced-container'>
                    <h1 className='update-cont'>UPDATE FRID</h1>
                    <h1 className='genre-cont'>ROMANCE</h1>
                </div>
        </div>
    )}