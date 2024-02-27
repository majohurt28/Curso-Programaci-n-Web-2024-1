export function Button ({className, OnClickFunction, text}) {
    return(
        <button className={className} onClick={OnClickFunction}>{text}</button>
    )
}