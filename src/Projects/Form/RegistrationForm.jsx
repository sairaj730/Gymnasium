import { useState } from "react";
export const RegistrationForm = () => {
    const [user,setUser]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setUser ((prev) => ({...prev,[name]: value}));
    }

    const handleFormSubmit= (event) => {
        event.preventDefault();
        console.log("fetched users",user);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={user.firstName}
                    onChange={handleInputChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={user.lastName}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleInputChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="text"
                    name="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleInputChange}
                /><label htmlFor="phoneNumber">phone Number</label>
                <input 
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}