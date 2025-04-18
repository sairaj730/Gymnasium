import { useState } from "react";

export const ContactForm = () => {
    const [contact,setContact] = useState({
        username:"",
        mail:"",
        message:"",
    });
    const handleInputChange = (e) => {
        const {name,value} =e.target;
        setContact((prev) => ({
            ...prev,
            [name]:value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(contact);
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">User Name</label>
            <input 
            id="username"
            type="text"
            name="username"
            value={contact.username}
            placeholder="Enter user name"
            autoComplete="off"
            onChange={handleInputChange}
            />
            <label htmlFor="mail">Email</label>
            <input
            id="mail" 
            type="email"
            name="mail"
            value={contact.mail}
            placeholder="Enter E-mail"
            autoComplete="off"
            onChange={handleInputChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
            id="message"
            type="message"
            name="message"
            value={contact.message}
            placeholder="Enter your message"
            className="message-input"
            autoComplete="off"
            cols="10"
            onChange={handleInputChange}
            />
            <button type="submit">login</button>

        </form>
    );
}