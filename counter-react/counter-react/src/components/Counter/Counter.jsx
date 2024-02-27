import './Counter.css'

export function CounterComponent({count}) {
    return (
        <div>
         <h1 className="count">{count}</h1>
        </div>
    )
}