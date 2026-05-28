import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage("protfolio-theme", true);

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
    }

    const themeClass = isDarkMode ? "dark-theme" : "light-theme";

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        <div className={`app-container ${themeClass}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}