import React from "react"
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import { useThemeContext } from "../context/ThemeContext.jsx";

export default function QuizPage() {

    const { theme } = useThemeContext();

    return (
            <main className="page-container">
                <div className="header">
                    <ThemeSwitcher />
                </div>

                <section className="left-column">
                    <h1 className="fs-2 lh-2">Some Question here</h1>
                    <p className="sm-text">Pick a subject to get started.</p>
                </section>

                <section className="right-column flow">
                    <h3 className="fs-4 lh-2">Some Option</h3>
                    <h3 className="fs-4 lh-2">Some Option</h3>
                    <h3 className="fs-4 lh-2">Some Option</h3>
                    <h3 className="fs-4 lh-2">Some Option</h3>
                </section>
            </main>
            )
}