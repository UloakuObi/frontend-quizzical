import {createContext, useState, useEffect, useContext} from "react"

const ThemeContext = createContext()

export default function ThemeProvider({children}) {

    const [theme, setTheme] = useState(() => {
        // Load theme from localStorage if available
        return localStorage.getItem("theme") || "light";
    })

    console.log(theme)

    useEffect(() => {
        // Apply the theme to the <html> element
        document.documentElement.setAttribute("data-theme", theme)
        // Save the theme
        localStorage.setItem("theme", theme)
    }, [theme])


    // Toggle Theme
    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// Custom hook
export const useThemeContext = () => useContext(ThemeContext);