import React from "react"
import data from "./data.js"
import HomePage from "./pages/HomePage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import { useThemeContext } from "./context/ThemeContext.jsx";


export default function App() {

    // const { theme } = useThemeContext();

    const [category, setCategory] = React.useState(null)
    const [currentPage, setCurrentPage] = React.useState("home")
    
    function selectCategory(cat) {
      setCategory(cat)
      setCurrentPage("quiz")
    }

    React.useEffect(() => {
      console.log("Updated state:", category);
      const quiz = data.quizzes
      const selectedCategory = quiz.filter(quizCat => quizCat.title === category)
      console.log(selectedCategory)
    }, [category]);

    return (
        <>
            {currentPage === "home" ? <HomePage onSelectCategory={selectCategory} />
            : <QuizPage />}
        </>
      );
}

    