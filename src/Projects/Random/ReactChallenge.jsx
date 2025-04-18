import { useState } from "react";

export const ReactChallenge = () => {
    const [count,setCount] = useState(0);
    const [number,setNumber]=useState("");
    const increment = (num) => {
        if(count<100) {
            setCount(count+num);
        }
    }
    const decrement = (num) => {
        if(count>0){
            setCount(count-num);
        }
    };
    const reset = () => {
        setCount(0);
    };

    return (
        <div className="container state-container">
            <h1>React counter</h1>
            <h2>Count : {count}</h2>
            <div>
                <input type="number"
                // value={number} 
                placeholder="Enter a number"
                onChange={(e)=> setNumber(Number(e.target.value))}
                />
                
            </div>
            <div className="grid grid-cols-3 gap-4">
            <button onClick={() => increment(number)} disabled={count>=100}>Increment</button>
            <button onClick={() => decrement(number)} disabled={count<=0}>Decrement</button>
            <button onClick={() => reset()}>Reset</button>
            </div>

        </div>
    );
}