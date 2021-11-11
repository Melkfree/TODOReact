import React from "react";
import { useState } from "react/cjs/react.development";

const Counter = function(){
    const [count, setCount] = useState(0);


    function increment(){
        setCount(count + 1);
        console.log(count);
    }

    function decrement(){
        setCount(count - 1);
        console.log(count);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment} onChange={increment}>Increment</button>
            <button onClick={decrement} onChange={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;