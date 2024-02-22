import './Schedule.css'
import React from "react"

export function Schedule(){
    return(
    <div className="schedule-container">

            <h1> MON</h1>
            <h1> TUE</h1>
            <h1 style={{ backgroundColor: "#00dc64",
                        color:"#ffffff",
                        borderBottomColor: "black",
                        paddingBottom: "-2px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        width: "120px"}}
            >WED</h1>
            <h1> THU</h1>
            <h1> FRI</h1>
            <h1> SAT</h1>
            <h1> SUN</h1>
            <a style={{ color: "#000",
                        marginTop: "22px",
                        marginLeft: "10px",
                        fontSize: "19px",
                        color: "#838383",
                        height: "60px",
                        width: "120px",
                        fontweight: "700" }}
            >MORE</a>

    </div>
    )
}

