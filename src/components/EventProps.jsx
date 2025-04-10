import styled from "styled-components";
const StyledButton =styled.button`
        background-color : #f7dc6f;
        color :#7dcea0;
        align-items: center;
        font-size: 24px;
        padding: 10px;
        border-radius: 8px;
    `;
export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey there you are ${user}`);
    }
    const handleHover = () => {
        alert("thanks for hovering me");
    }
    return (<>
        <WelcomeUser 
            onClick={() => HandleWelcomeUser("sai Raj")}
            onMouseHover= {handleHover}
        />
    </>);
};

const WelcomeUser = (props) => {
    
    // const 
    const handleGreetings = () => {
        console.log("hey welcome to console");
        props.onClick();
    }
    return (<>
    <StyledButton onClick= {props.onClick}>click me</StyledButton>
    <StyledButton onMouseEnter={props.onMouseHover}>hovering</StyledButton>
    <StyledButton onClick={handleGreetings}>greetings</StyledButton>
    </>);
}