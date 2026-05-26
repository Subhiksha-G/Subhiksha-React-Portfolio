import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider ({Children}) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
    }

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    );
}