import './assets/styles/style.scss'
import { Route, Routes, useNavigate } from "react-router"
import { useContext, useState } from "react"
import { QuestionType } from "./utils/types"
import { QuestionContext } from "./utils/context"
import { Question } from "./pages/question"
import { Complexity } from "./pages/complexity"
import { Result } from "./pages/result"
import { Timer } from "./components/timer"
import { Slider } from './components/slider'



function App() {
    const [slider, setSlider] = useState(0)

    const {setSelectedAnswer, setComplexity, 
        complexity, currentQuestionIndex, setCurrentQuestionIndex,  
        questions, setPoint, point} = useContext(QuestionContext)
        
    const navigate = useNavigate()
    
    const getSliderIncrement = (complexity: string) => {
        if (complexity === 'Easy') {
            return 20
        } else if (complexity === 'Medium') {
            return 10
        } else if (complexity === 'Hard') {
            return 5
        }
        return 0
    }
    
    const handleAnswer = (question: QuestionType, answer: string) => {
        const sliderIncrement = getSliderIncrement(complexity)
        setSlider(slider + sliderIncrement)

        if (question.answer === answer){
            setPoint(point + 1)
        }

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
                setSelectedAnswer('')
            }, 500)
        }
        
        if (currentQuestionIndex === questions.length - 1) {
            setTimeout(() => {
                navigate('result')
            }, 500)

            setComplexity('')
        }
    }

    const startGame = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => { 
        const target = event.target as HTMLParagraphElement

        setComplexity(target.innerText)
        
        setTimeout(() => {
            navigate('questions')
        }, 150)
    }


    const time = new Date()
    time.setSeconds(time.getSeconds() + 600) 
    
    
    return (
        <div className="app">
            <Timer  expiryTimestamp={time} />
            <Slider slider={slider}/>
            <Routes>
                <Route path="/" element={<Complexity startGame={startGame}/>}/>
                <Route path="questions" element={<Question question={questions[currentQuestionIndex]} 
                                            index={currentQuestionIndex} 
                                            handleAnswer={handleAnswer}/>}
                />
                <Route path="result" element={<Result questionCount={questions.length} point={point}/>}/>
            </Routes>
        </div>
    )
}

export default App;