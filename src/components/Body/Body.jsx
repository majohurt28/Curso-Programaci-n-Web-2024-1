import React from "react"
//importar react en cada archivo
export function Body(props){
    const{Color} = props
    return(
        <main style= {{backgroundColor: Color}}>

        </main>
    )
}