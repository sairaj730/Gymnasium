import { createContext, use, useState } from "react";
const ThemeContext = createContext();
export const SetThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("dark");
    const handleToggleTheme = () => {
        return setTheme((prevTheme) => (prevTheme==="dark" ? "light" : "dark"));
    };
    return (<ThemeContext.Provider value={{theme,handleToggleTheme}}>
    {children}
    </ThemeContext.Provider>);
}

export const DarkLight = () => {
    const {theme,handleToggleTheme}= use(ThemeContext);
    return (
        <div 
        className={`p-4 h-lvh flex flex-col justify-center items-center
         ${theme==="dark"?"bg-gray-800" : "bg-white"}`}>
            <h1 
            className={`my-4 text-xl 
            ${theme==="light"?"text-gray-800" : "text-white"}`}>
                Dark Light Mode Website</h1>
            <p
            className={`my-4 text-xl 
            ${theme==="light"?"text-gray-800" : "text-white"}`}>
                Button for Color Themes</p>
            <button onClick={handleToggleTheme}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4">
                {theme==="dark" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            </button>
        </div>
        
    );
}