import {useState} from "react";
export const State = () => {
const [count,setCount] = useState(0);
console.log("Parent component rendered");
const handleButtonClick = () => {
    setCount(() => count+1)
}
    return (
        <section className="main-div">
            <h1 >{count}</h1>
            <button onClick={handleButtonClick}>Increment </button>
            <ChildComponent count={count}/>
        </section>
    );
}

function ChildComponent({count}) {
    console.log("Child component rendered");
    return (<div className="main-div">
        <h2>child compoent - {count}</h2>
    </div>);
}

export function Sibling() {
    console.log("Sibling component rendered");
    return (<div className="main-div">
        <h2>Sibling compoent</h2>
    </div>);
}