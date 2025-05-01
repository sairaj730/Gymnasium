import { useReducer } from "react";

export const UseReducer = () => {
    const reducer= (state,action) => {
        if(action.type === "INCREMENT") {
            return state+1;
        }
        if(action.type === "DECREMENT") {
            return state-1;
        }
        if(action.type==="RESET") {
            return 0;
        }
    };
    const [count,dispatch] = useReducer(reducer,0);
    return (
        <>
            <div
            className="p-4 h-lvh flex flex-col justify-center items-center">
                <h1>Count: {count}</h1>
                <button 
                onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
                <button
                onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
                <button 
                onClick={() => dispatch({type: "RESET"})}>RESET</button>
            </div>
        </>
    );
}