import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    

    return (
        <>
            <h4>{count}</h4>
            <button onClick={increment}>Up</button>
            <button onClick={decrement}>Down</button>
        </>
    )
}

export default Counter