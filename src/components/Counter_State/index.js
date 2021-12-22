import React from "react";
import {useState } from "react";
import './style.css'

export default function Counter_State(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Basic Counter</h1>
            <h2>You clicked {count} times!</h2>
            <button onClick={()=>setCount({count: count + 1})}>Increment</button>

        </div>
    )
}