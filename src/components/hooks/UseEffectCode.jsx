import { useEffect, useState } from "react";

export const UseEffectCode = () => {
    const [name,setName]= useState("");
    const [count,setCount]=useState(0);
    useEffect (() => {
        document.title=`count : ${count}`;
    },[count]);
    useEffect (() => {
        console.log(name);
    }, [name]);
    useEffect (() => {
        // console.log(count);
    }, [count]);
    return (
        <div>
            <h1>UseEffect Challenge</h1>
            <p>Count : {count}</p>
            <button 
            onClick={() => {setCount(count+1)}}>Increment</button>
            <input 
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)} />
            <p>name : {name}</p>
        </div>
    );
}