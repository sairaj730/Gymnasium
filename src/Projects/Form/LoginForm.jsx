import { useState } from "react";
export const LoginForm = () => {
    const [username,setUsername] = useState("");
    const [pass,setPass] = useState("");
    return (
        <form action="">
            <label htmlFor="username">User Name</label>
            <input 
            type="text"
            name="username"
            value={username}
            placeholder="Enter user name"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="pass">Password</label>
            <input 
            type="password"
            name="password"
            value={pass}
            placeholder="Enter password"
            autoComplete="off"
            onChange={(e) => setPass(e.target.value)}
            />
            <button type="submit">login</button>
        </form>
    );
}