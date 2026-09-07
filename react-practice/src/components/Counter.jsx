import { use } from "react";
import { CounterContext } from "../providers/counter.context";
import "./card.css"
// import { useState } from "react"

export default function Counter() {
    // const [count, setCount] = useState(0);
    const {count, setCount} = use(CounterContext)
    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div className="card">
            <button className="button" onClick={handleIncrement}>Increment</button>
            
            <button className="button" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}