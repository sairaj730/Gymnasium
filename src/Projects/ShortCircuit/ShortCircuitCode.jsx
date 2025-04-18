import { useState } from "react";

export const ShortCircuitCode = () => {
    const [isLogin, SetisLogin] = useState(true);
    const [user,setUser] = useState("");
    return (
        <section className="container short-container">
            <h1>Welcome to Short Circuit Evaluation!</h1>

            {isLogin && <p>Your are Logged in!</p>}
            {user ? `Hello ${user}` : "plz log in!"}
            <div className="grid-three-cols">
                <button onClick={() => SetisLogin(!isLogin)}>Toggle Button</button>
                <button onClick={() => setUser("sai raj")}>Set user</button>
                <button onClick={() => setUser("")}>Clear user</button>
            </div>
        </section>
    );
}