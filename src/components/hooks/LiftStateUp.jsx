import {useState} from "react";
export const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("");
    return (<>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
        <DisplayDomponent inputValue={inputValue}/>
    </>);
}

const InputComponent = ({inputValue, setInputValue}) => {
    
    return (
        <>
            <input type="text" placeholder="Enter your name: " 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            > </input>
        </>
    );
}
const DisplayDomponent = ({inputValue}) => {
    return (
        <p>the current input value is: {inputValue}</p>
    );
}