
import {useState} from "react";
export const ToggleSwitch = () => {
    const [isOn,SetisOn] =useState(false);
    const handleToggleSwitch = () => {
        SetisOn(!isOn);
    }
    const checkIsOn= isOn ? "ON" : "OFF";
    return (
        <div className="toggle-switch" style={{backgroundColor: isOn ? "#000000" : "#ffffff"}} 
        onClick={handleToggleSwitch}>
            <div className={`switch ${isOn ? "on" :"off"}`}>
                <span className="switchState"> {checkIsOn}</span>
            </div>
        </div>
    );
}