import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage("protfolio-theme", true);

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
    }

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}