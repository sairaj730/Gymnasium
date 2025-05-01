import { SetThemeProvider } from "./Projects/ColorTheme/DarkLight.jsx";
import { DarkLight } from "./Projects/ColorTheme/DarkLight.jsx";
import "./Projects/ColorTheme/DarkLight.css";
import { UseReducer } from "./components/hooks/UseReducer/UseReducer.jsx";

export const App = () => {
  return (
      <>
      <UseReducer/>
      {/* <SetThemeProvider>
        <DarkLight/>
      </SetThemeProvider> */}
    </>
  );
};
