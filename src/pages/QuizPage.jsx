import React from "react"
import data from "../data.js"
import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";
import ScoreCard from "../components/ScoreCard.jsx";
import errorIcon from "/assets/images/icon-error.svg"
import ErrorPopup from "../components/ErrorPopup.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import OptionButton from "../components/OptionButton.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import { useThemeContext } from "../context/ThemeContext.jsx";

export default function QuizPage({category, setCurrentPage}) {

    const { theme } = useThemeContext();

    // State values
    const [quiz, setQuiz] = React.useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
    const [showFeedback, setShowFeedback] = React.useState(false);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const [chosenId, setChosenId] = React.useState(null)
    const [displayScore, setDisplayScore] = React.useState(false)

    // State Derived Values
    const currentQuestion = quiz.length > 0 ? quiz[currentQuestionIndex] : null;
    const errorFeedback = showFeedback === null && !selectedAnswer
    const getQuizScore = !showFeedback && currentQuestionIndex === (quiz.length - 1)

    // Ref Values
    const correctAnswersCount = React.useRef(0);

    // Other Values
    const optionsId = ["A", "B", "C", "D"]

    React.useEffect(() => {
        console.log("Updated state:", category);
        const quizData = data.quizzes
        const selectedCategory = quizData.filter(quizCat => quizCat.title === category)
        setQuiz(selectedCategory[0].questions)
        // if (selectedCategory) {
        //     setQuiz(selectedCategory[0].questions)
        // }
        
    }, []);
  
    //console.log(quiz)

    React.useEffect(() => {
        if (currentQuestion && selectedAnswer) {
            if (currentQuestion.answer === selectedAnswer) {
                correctAnswersCount.current++
            }
        }
    }, [currentQuestion, selectedAnswer])

    
    if (showFeedback) {
        console.log(correctAnswersCount)
    }


    function selectAnswer(id, option) {
        setSelectedAnswer(option)
        setChosenId(id)
        console.log(`button with ${id} clicked`)
    }

    function handleSubmitAnswer() {
        if (!selectedAnswer) {
            setShowFeedback(null)
        } else if (selectedAnswer) {
            setShowFeedback(true)
        }
    }

    function handleNextQuestion() {
        setShowFeedback(false)
        setSelectedAnswer(null)
        setChosenId(null)
        setCurrentQuestionIndex(prev => prev + 1)
    }

    function handleGetScore() {
        setDisplayScore(true)
        setShowFeedback(false)
    }

    function handlePlayAgain() {
        setCurrentPage("home")
    }

    let questionElement = null;

    if (quiz.length > 0 && currentQuestion?.options) {
        questionElement = currentQuestion.options.map((option, index) => {
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

    let actionButton;

    if (showFeedback) {
    actionButton = (
        <Button onClick={handleNextQuestion}>Next Question</Button>
    ); 
    } else if (displayScore) {
        actionButton = (
          <Button onClick={handlePlayAgain}>Play Again</Button>
        );
    } else if (getQuizScore) {
        actionButton = (
          <Button onClick={handleGetScore}>Submit & Get Result</Button>
        );
    } else {
    actionButton = (
        <Button className={errorFeedback ? "inactive" : ""} onClick={handleSubmitAnswer}>
        Submit Answer
        </Button>
    );
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
                    {/* LEFT COLUMN */}
                    <section className="left-column">
                        {
                        displayScore ? 
                            (
                            <h1 className="fs-2 lh-2">Quiz Completed<span className="bold-text">You scored...</span></h1>
                            ) : (
                                <>
                                    <p className="sm-text">{`Question ${currentQuestionIndex + 1} of ${quiz.length}`}</p>
                                    <h3 className="fs-3 lh-2">{currentQuestion.question}</h3>
                                    <ProgressBar className={`progress-${theme}`} currentValue={currentQuestionIndex + 1} maxValue={quiz.length} />
                                </>
                            )
                        }
                    </section>

                    {/* RIGHT COLUMN */}
                    <section className="right-column flow">
                        {
                        displayScore ? 
                            (
                            <ScoreCard score={correctAnswersCount.current} className={`${theme}-theme`}>
                                <Logo src={`/assets/images/icon-${category.toLowerCase()}.svg`} 
                                      className={`${theme}-theme-font fs-6`}
                                      category={category}>
                                    {category}
                                </Logo>
                            </ScoreCard>
                            )
                            : (
                                questionElement  /* array of OptionButtons */
                            )
                        }
                        {actionButton}  {/* Next / Submit / Get Score */}
                        {errorFeedback && <ErrorPopup src={errorIcon} className={`error-${theme}`} />}
                    </section>
                </>}
            </main>
            )
}


