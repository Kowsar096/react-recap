import "./card.css"
// import { useState } from "react"

export default function Counter({count, setCount}) {
    // const [count, setCount] = useState(0);

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