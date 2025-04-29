import { SetThemeProvider } from "./Projects/ColorTheme/DarkLight.jsx";
import { DarkLight } from "./Projects/ColorTheme/DarkLight.jsx";
import "./Projects/ColorTheme/DarkLight.css";

export const App = () => {
  return (
      <>
      <SetThemeProvider>
        <DarkLight/>
      </SetThemeProvider>
    </>
  );
};
