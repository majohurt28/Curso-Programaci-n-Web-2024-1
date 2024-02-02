import React from "react"

export function Header(props){
    const{Color} = props
    return(
        <header style= {{backgroundColor: Color}}>Buenas noches</header>
    )
}