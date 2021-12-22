import React from "react";
import {useState } from "react";
import './style.css'

export default function Counter_State(){
    const [count, setCount] = useState(0);

    return(
        <div className="counter">
            <h1>Basic Counter</h1>
            <h2>You clicked {count} times!</h2>
            <button onClick={()=> (setCount(count + 1))}>Increment</button>

        </div>
    )
}