import React from "react"
import data from "../data.js"
import Logo from "../components/Logo.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import { useThemeContext } from "../context/ThemeContext.jsx";

export default function QuizPage({category}) {

    const { theme } = useThemeContext();

    // State values
    const [quiz, setQuiz] = React.useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)

    // State Derived Values
    const currentQuestion = quiz.length > 0 ? quiz[currentQuestionIndex] : null;

    React.useEffect(() => {
        console.log("Updated state:", category);
        const quizData = data.quizzes
        const selectedCategory = quizData.filter(quizCat => quizCat.title === category)
        setQuiz(selectedCategory[0].questions)
        // if (selectedCategory) {
        //     setQuiz(selectedCategory[0].questions)
        // }
        
    }, []);
  
    console.log(quiz)
    
    // console.log(currentQuestion)
    // console.log(currentQuestion.question)
    // console.log(currentQuestion.options)
    // console.log(currentQuestion.answer)

    return (
            <main className="page-container">
                <div className="quiz-page-header">
                    <Logo src={`/assets/images/icon-${category.toLowerCase()}.svg`} 
                          className={`${theme}-theme-font fs-6`} 
                          category={category}>
                        {category}
                    </Logo>
                    <ThemeSwitcher />
                </div>

                {quiz.length > 0 && 
                <>
                    <section className="left-column">
                        <p className="sm-text">{`Question ${currentQuestionIndex + 1} of ${quiz.length}`}</p>
                        <h3 className="fs-3 lh-2">{currentQuestion.question}</h3>
                    </section>

                    <section className="right-column flow">
                        <h3 className="fs-4 lh-2">Some Option</h3>
                        <h3 className="fs-4 lh-2">Some Option</h3>
                        <h3 className="fs-4 lh-2">Some Option</h3>
                        <h3 className="fs-4 lh-2">Some Option</h3>
                    </section>
                </>}
            </main>
            )
}