import {useState} from "react";
export const DerivedState = () => {
    const [users,setUsers] =useState([
        {name : "Raj",age: 20},
        {name: "Alice",age:21},
        {name: "Bob",age: 20},
        {name: "Boss",age: 21},
    ]);
const count=users.length;
const Average=users.reduce((accum,curElem) =>accum+curElem.age,0)/count;
    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {users.map((u,idx) => (
                    <li key={idx}><h2>{u.name} - {u.age} years old</h2></li>
                ))}
            </ul>
            <h2>Total users: {count}</h2>
            <h2>Average age: {Average}</h2>
        </div>
    );
};