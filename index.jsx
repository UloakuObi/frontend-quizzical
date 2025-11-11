import React from "react"
import ReactDOM from "react-dom/client"
import ThemeProvider from './src/context/ThemeContext.jsx';
import App from "./src/App.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);