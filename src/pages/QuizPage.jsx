import React from "react"
import data from "../data.js"
import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";
import OptionButton from "../components/OptionButton.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import { useThemeContext } from "../context/ThemeContext.jsx";

export default function QuizPage({category}) {

    const { theme } = useThemeContext();

    // State values
    const [quiz, setQuiz] = React.useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
    const [showFeedback, setShowFeedback] = React.useState(false);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const [chosenId, setChosenId] = React.useState(null)

    // State Derived Values
    const currentQuestion = quiz.length > 0 ? quiz[currentQuestionIndex] : null;
    const errorFeedback = showFeedback === null && !selectedAnswer

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

    const optionsId = ["A", "B", "C", "D"]

    function selectAnswer(id, option) {
        setSelectedAnswer(option)
        setChosenId(id)
        console.log(`button with ${id} clicked`)
    }

    function submitAnswer() {
        if (!selectedAnswer) {
            setShowFeedback(null)
        } else if (selectedAnswer) {
            setShowFeedback(true)
        }
    }


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
                        {
                            currentQuestion.options.map((option, index) => {
                                const id = optionsId[index]
                        
                                return (
                                    <OptionButton
                                        key={id}
                                        className={`${theme}-theme`}
                                        option={id}
                                        isChosen={id === chosenId}
                                        isCorrect={option === currentQuestion.answer}
                                        showFeedback={showFeedback}
                                        onClick={() => selectAnswer(id, option)}
                                    >
                                        {option}
                                  </OptionButton>
                                )})
                        }
                        {showFeedback ? 
                        <Button onClick={() => {}}>Next Question</Button>
                        :
                        <Button className={errorFeedback && "inactive"} onClick={() => submitAnswer()}>Submit Answer</Button>
                        }
                        {errorFeedback && <p>Please select an answer!</p>}
                    </section>
                </>}
            </main>
            )
}