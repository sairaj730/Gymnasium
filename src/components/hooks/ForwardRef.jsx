import {useId, useRef } from "react";

export const ForwardRef = () => {
    const username=useRef(null);
    const password=useRef(null);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value,password.current.value)
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <AfterReact19Version type="text" label="username" ref={username} />
            <AfterReact19Version type="text" label="password" ref={password} />
            <button type="submit">submit</button>
        </form>
    );
}

const AfterReact19Version = (props) => {
    const id=useId();
    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" 
            placeholder={`Enter your ${props.label}`}
            ref={props.ref} />
        </div>
    );
};