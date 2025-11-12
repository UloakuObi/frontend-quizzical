import React from "react"
import data from "../data.js"
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import { useThemeContext } from "../context/ThemeContext.jsx";
import CategoryButton from "../components/CategoryButton.jsx";
import htmlIcon from "/assets/images/icon-html.svg";
import accessibilityIcon from "/assets/images/icon-accessibility.svg";
import cssIcon from "/assets/images/icon-css.svg";
import jsIcon from "/assets/images/icon-javascript.svg";

export default function HomePage({onSelectCategory}) {

    const { theme } = useThemeContext();
    const categories = [{"title": "HTML", "icon": htmlIcon},
                        {"title": "CSS", "icon": cssIcon}, 
                        {"title": "Accessibility", "icon": accessibilityIcon}, 
                        {"title": "JavaScript", "icon": jsIcon}];


    return (
        <main className="page-container">
            <div className="home-page-header">
                <ThemeSwitcher />
            </div>
            
            <section className="left-column">
                <h1 className="fs-2 lh-2">Welcome to the <span className="bold-text">Frontend Quiz!</span></h1>
                <p className="sm-text">Pick a subject to get started.</p>
            </section>

            <section className="right-column flow">
              {categories.map(cat => (
              <CategoryButton
                key={cat.title}
                src={cat.icon}
                className={`${theme}-theme`}
                onClick={() => onSelectCategory(cat.title)}
                >
                {cat.title}
              </CategoryButton>
              ))}
            </section>
            
        </main>
      );
}