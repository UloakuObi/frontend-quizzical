import React from "react"
import ThemeSwitcher from "./components/ThemeSwitcher";
import Logo from "./components/Logo.jsx";
import CategoryButton from "./components/CategoryButton.jsx";
import { useThemeContext } from "./context/ThemeContext.jsx";
import htmlIcon from "/assets/images/icon-html.svg";
import allyIcon from "/assets/images/icon-accessibility.svg";
import cssIcon from "/assets/images/icon-css.svg";
import jsIcon from "/assets/images/icon-js.svg";

export default function App() {

    const { theme } = useThemeContext();

    return (
        <main className="page-container">
            <div className="header">
                <ThemeSwitcher />
            </div>
            
            <section className="left-column">
                <h1 className="fs-2 lh-2">Welcome to the <span className="bold-text">Frontend Quiz!</span></h1>
                <p className="sm-text">Pick a subject to get started.</p>
            </section>

            <section className="right-column flow">
                <CategoryButton
                src={htmlIcon}
                className={`${theme}-theme`}
                category="html"
                >
                HTML
                </CategoryButton>

                <CategoryButton
              src={cssIcon}
              className={`${theme}-theme`}
              category="css"
            >
              CSS
            </CategoryButton>

            <CategoryButton
              src={jsIcon}
              className={`${theme}-theme`}
              category="javascript"
            >
              Javascript
            </CategoryButton>

            <CategoryButton
              src={allyIcon}
              className={`${theme}-theme`}
              category="accessibility"
            >
              Accessibility
            </CategoryButton>
            </section>
            
        </main>
      );
}